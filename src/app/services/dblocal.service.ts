import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Citas } from '../interfaces/citas';
import { Itutores } from '../interfaces/Itutores';

@Injectable({
  providedIn: 'root'
})
export class DblocalService {

  private _storage: Storage | null=null;

  constructor( private storage:Storage) { 

    this.Init();
    this.cargarTutores();
  }

  async Init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }
  cargarTutores(){


  }
}
