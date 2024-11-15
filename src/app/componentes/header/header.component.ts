import { Component, Input, OnInit, inject } from '@angular/core';
import { CargandoService } from 'src/app/servicios/cargando.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() title!: string;
  @Input()backButton!: string;

  isAuthenticated : boolean = false;



cargandoS = inject(CargandoService);
fireBS = inject(FirebaseService);

  ngOnInit() {

    this.fireBS.isAuthenticated$.subscribe(authState => {
      this.isAuthenticated = authState;
    });
  }




}
