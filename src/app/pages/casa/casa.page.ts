import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.page.html',
  styleUrls: ['./casa.page.scss'],
})
export class CasaPage implements OnInit {

  usuarioNombre: string | null = '';
  usuarioRun: string | null = '';

  constructor(public router: Router) { }

  ngOnInit() {

    this.usuarioNombre = localStorage.getItem('usuarioNombre');
    this.usuarioRun = localStorage.getItem('usuarioRun')

  }


  citas(){
    this.router.navigate(['/citas']);
  }

  cmedica(){
    this.router.navigate(['/cmedica']);
  }

  tutores(){
    this.router.navigate(['/tutores']);
  }

  perfil(){
    this.router.navigate(['/perfil']);
  }

  calendario(){
    this.router.navigate(['/calendario']);
  }

  ayudarlinea(){
    this.router.navigate(['/ayudarlinea']);
  }

}