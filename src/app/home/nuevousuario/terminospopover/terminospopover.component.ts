import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-terminospopover',
  templateUrl: './terminospopover.component.html',
  styleUrls: ['./terminospopover.component.scss'],
})
export class TerminospopoverComponent  implements OnInit {

  constructor(private popoverController: PopoverController) { }

  async dismiss(){
    await this.popoverController.dismiss();
    
  }

  close(){
    this.popoverController.dismiss();
  }

  ngOnInit() {}

}
