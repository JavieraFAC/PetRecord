import { Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime,distinctUntilChanged,startWith } from 'rxjs';
import { DogApiService } from 'src/app/servicios/API/dog-api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  breeds: any[] = [];
  filteredBreeds: any[] = [];
  randomImages: string[] = [];
  searchControl: FormControl = new FormControl('');

  ApiS = inject(DogApiService);

  constructor() { }

  ngOnInit() {
    this.loadBreeds();
    this.loadRandomImages(); 

    //barra de búsqueda
    this.searchControl.valueChanges
      .pipe(
        startWith(''), 
        debounceTime(300), 
        distinctUntilChanged()
      )
      .subscribe((searchTerm) => this.filterBreeds(searchTerm));
  }

  loadBreeds() {
    this.ApiS.getBreeds().subscribe(
      (data) => {
        this.breeds = data;
        this.filteredBreeds = data;
      },
      (error) => console.error('Error al obtener las razas:', error)
    );
  }

  filterBreeds(searchTerm: string) {
    this.filteredBreeds = this.breeds.filter((breed) =>
      breed.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  loadRandomImages() {
    this.ApiS.getRandomDogImages(5).subscribe(
      (data) => {
        this.randomImages = data.map((img: any) => img.url);
        console.log('Imágenes aleatorias:', this.randomImages);
      },
      (error) => console.error('Error al obtener las imágenes:', error)
    );
  }
}
