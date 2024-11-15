import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
/* componentes */ 
import { HeaderComponent } from './header/header.component';
import { TerminosycondicionesComponent } from './terminosycondiciones/terminosycondiciones.component';
import { LogoComponent } from './logo/logo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NofoundComponent } from './nofound/nofound.component';
import { NuevotutorComponent } from './nuevotutor/nuevotutor.component';
/* componentes */ 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';






@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    FormularioComponent,
    TerminosycondicionesComponent,
    NofoundComponent,
    NuevotutorComponent
  ],
  exports:[
    HeaderComponent,
    IonicModule,
    LogoComponent,
    FormularioComponent,
    ReactiveFormsModule,
    TerminosycondicionesComponent,
    NofoundComponent,
    NuevotutorComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
