import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-terminosycondiciones',
  templateUrl: './terminosycondiciones.component.html',
  styleUrls: ['./terminosycondiciones.component.scss'],
})
export class TerminosycondicionesComponent  implements OnInit {

  constructor( private popoverController: PopoverController) { }

  async dismiss(){
    await this.popoverController.dismiss();
    
  }

  close(){
    this.popoverController.dismiss();
  }
  ngOnInit() {}

}