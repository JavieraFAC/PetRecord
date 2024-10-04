import { Component, OnInit } from '@angular/core';

// especie animal
export class EspecieAnimal {
  id: number;
  nombreEspecie: string;
  seleccionada: boolean;

  constructor(id: number, nombreEspecie: string) {
    this.id = id;
    this.nombreEspecie = nombreEspecie;
    this.seleccionada = false;
  }
}
// tipo muestra
export class tipoMuestra {
  idMuestra: number;
  tipoMuestra: string;

  constructor(idMuestra: number, tipoMuestra: string) {
    this.idMuestra = idMuestra;
    this.tipoMuestra = tipoMuestra;
  }
}

@Component({
  selector: 'app-configuracioncuenta',
  templateUrl: './configuracioncuenta.page.html',
  styleUrls: ['./configuracioncuenta.page.scss'],
})


export class ConfiguracioncuentaPage {


  especies: EspecieAnimal[] = [];
  especiesSeleccionadas: EspecieAnimal[] = [];


  muestras: tipoMuestra[] = [];
  muestraSeleccionadas: tipoMuestra[] = [];

  constructor() {
    // Inicializa las especies aquí
    this.especies = [
      new EspecieAnimal(1, 'Araña/Tarántula'),
      new EspecieAnimal(2, 'Ave Ornamental'),
      new EspecieAnimal(3, 'Ave Rapaz'),
      new EspecieAnimal(4, 'Avícola'),
      new EspecieAnimal(5, 'Bovino'),
      new EspecieAnimal(6, 'Canino'),
      new EspecieAnimal(7, 'Conejo'),
      new EspecieAnimal(8, 'Equino'),
      new EspecieAnimal(9, 'Exótico'),
      new EspecieAnimal(10, 'Erizo'),
      new EspecieAnimal(11, 'Felino'),
      new EspecieAnimal(12, 'Ovino'),
      new EspecieAnimal(13, 'Pez'),
      new EspecieAnimal(14, 'Porcino'),
      new EspecieAnimal(15, 'Reptil'),
      new EspecieAnimal(16, 'Roedor'),
      new EspecieAnimal(17, 'Otra'),
      
    ];

      this.muestras = [
        new tipoMuestra(1, 'Ascitis'),
        new tipoMuestra(2, 'Aspiracion'),
        new tipoMuestra(3, 'Biopsia'),
        new tipoMuestra(4, 'Cabello'),
        new tipoMuestra(5, 'Calculos'),
        new tipoMuestra(6, 'Citrato'),
        new tipoMuestra(7, 'EDTA'),
        new tipoMuestra(8, 'EDTA/Heparina'),
        new tipoMuestra(9, 'Esperma'),
        new tipoMuestra(10, 'Esputo'),
        new tipoMuestra(11, 'Fluido corporal'),
        new tipoMuestra(12, 'Fluido nasal'),
        new tipoMuestra(13, 'Frotis'),
        new tipoMuestra(14, 'Ganglio'),
        new tipoMuestra(15, 'Heces'),
        new tipoMuestra(16, 'Hemocultivo'),
        new tipoMuestra(17, 'Hisopo'),
        new tipoMuestra(18, 'Leche'),
        new tipoMuestra(19, 'Líquido cefalorraquídeo'),
        new tipoMuestra(20, 'Líquido sinovial'),
        new tipoMuestra(21, 'Médula Osea'),
        new tipoMuestra(22, 'Orina'),
        new tipoMuestra(23, 'PAD'),
        new tipoMuestra(24, 'Plaquetas'),
        new tipoMuestra(25, 'Sangre'),
        new tipoMuestra(26, 'Secreción'),
        new tipoMuestra(27, 'Suero'),
        new tipoMuestra(28, 'Tejido'),
        new tipoMuestra(29, 'Tumor'),
        new tipoMuestra(30, 'Uña'),

      ]
    }


  getSelectedSpecies() {
    const especiesSeleccionadas = this.especies.filter(especie => especie.seleccionada);
    console.log(especiesSeleccionadas)
  }
  getSelectedMuestras(){
    console.log(this.muestraSeleccionadas);
  }


}