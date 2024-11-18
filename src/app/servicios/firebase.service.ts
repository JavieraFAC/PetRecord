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

//obtener datos del usuario actual desde firebase PARA MOSTRAR EN EL PERFIL
async getUserData(uid: string) {
  const docRef = doc(getFirestore(), `users/${uid}`);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
}

//------------------------------------------------------------------------------

// cerrar sesion
signOut(){
  getAuth().signOut();
  localStorage.removeItem('user');
  this.cargandoS.routerLink('/login');
}


//----------------------
// datos personales
getUserUID(): Promise<string> {
  return new Promise((resolve, reject) => {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        resolve(user.uid);
      } else {
        reject('Usuario no autenticado');
      }
    });
  });
}

updateDocument(path: string, data: any): Promise<void> {
  return this.firestore.doc(path).update(data);
}

// -----------------------
// --- especies ----
async getEspecies(): Promise<any[]> {
  const especiesSnapshot = await this.firestore.collection('especies').get().toPromise();
  const especies = especiesSnapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Record<string, any>) }));

  return especies;
}

async getMuestras():  Promise<any[]> {
  const muestrasSnapshot = await this.firestore.collection('muestras').get().toPromise();
  const muestras = muestrasSnapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Record<string, any>) }));

  return muestras;
}

async getExamenes(): Promise<any[]> {
  const examenesSnapshot = await this.firestore.collection('examenes').get().toPromise();
  const examenes = examenesSnapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Record<string, any>) }));

  return examenes;
}

}
