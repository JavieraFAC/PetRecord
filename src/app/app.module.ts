import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { TerminospopoverComponent } from './home/nuevousuario/terminospopover/terminospopover.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { NoFoundComponent } from './shared/no-found/no-found.component';



@NgModule({
  declarations: [AppComponent, TerminospopoverComponent, NoFoundComponent],
  imports: [BrowserModule,BrowserAnimationsModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, IonicStorageModule.forRoot(), RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
