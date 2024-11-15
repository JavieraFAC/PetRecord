import { Component, Input, OnInit, inject } from '@angular/core';
import { CargandoService } from 'src/app/servicios/cargando.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() title!: string;
  @Input()backButton!: string;



cargandoS = inject(CargandoService);

  ngOnInit() {}




}
