import { inject, Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc} from '@angular/fire/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { Usuario } from '../models/usuario.model';
import { CargandoService } from './cargando.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  cargandoS = inject(CargandoService);



      // Observable para el estado de autenticación
      isAuthenticated$ = new BehaviorSubject<boolean>(false);
      
      constructor(private router: Router) {
        // Actualiza el observable isAuthenticated$ cuando cambia el estado de autenticación
        this.auth.authState.subscribe(user => {
          this.isAuthenticated$.next(!!user);
        });
      }


  //--- Autenticación de usuario
getAuth(){
  return getAuth();
}

  // Autenticación de usuario veterinario en login
  signIn(usuario: Usuario){
    return signInWithEmailAndPassword(getAuth(), usuario.email, usuario.password)
  }

  // Crear nuevo usuario veterinario
  signUp(usuario: Usuario){
    return createUserWithEmailAndPassword(getAuth(), usuario.email, usuario.password)
  }

  //actualizar datos del usuario veterinario
  updateUser(displayName: string){
    return updateProfile(getAuth().currentUser,{ displayName })

  }

  // BASE DE DATOS FIREBASE
// guardar datos del usuario
  setDocument(path: string, data: any){
    return setDoc(doc(getFirestore(),path), data);

  }
// obtener datos
async getDocument(path:string){
  return (await getDoc(doc(getFirestore(),path))).data();
}

// cerrar sesion
signOut(){
  getAuth().signOut();
  localStorage.removeItem('user');
  this.cargandoS.routerLink('/login');
}

}
