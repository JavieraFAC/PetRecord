import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.page.html',
  styleUrls: ['./casa.page.scss'],
})
export class CasaPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
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
