import { inject, Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {AngularFireStorage } from'@angular/fire/compat/storage'; // imagen
import { getStorage, uploadString,ref,getDownloadURL} from 'firebase/storage'; // imagen
import { getFirestore, setDoc, doc, getDoc,addDoc, collection, collectionData, query} from '@angular/fire/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { Usuario } from '../models/usuario.model';
import { CargandoService } from './cargando.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  cargandoS = inject(CargandoService);
  storage = inject(AngularFireStorage); // subir imagen

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
//------------------------------------------------------------------------------
// ----------------------- CONFIGURACION CUENTA ---------------------

async getEspecies(): Promise<any[]> {
  const especiesSnapshot = await this.firestore.collection('especies').get().toPromise();
  const especies = especiesSnapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Record<string, any>) }));
  return especies;
}

async getMuestras():  Promise<any[]> {
  const muestrasSnapshot = await this.firestore.collection('muestras').get().toPromise();
  const muestras = muestrasSnapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Record<string, any>) }))
  return muestras;
}

async getExamenes(): Promise<any[]> {
  const examenesSnapshot = await this.firestore.collection('examenes').get().toPromise();
  const examenes = examenesSnapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Record<string, any>) }));
  return examenes;
}
//------------------------------------------------------------------------------
// ------------------------------------ TUTORES ------------------------------------
// agregar tutor
addTutor(path: string, data:any){
  return addDoc(collection(getFirestore(),path),data);
}
// obtener tutores
getCollectionTutor(path: string , collectionQuery?:any){
  const ref = collection(getFirestore(), path);
  return collectionData(query(ref, collectionQuery),{idField: 'id'});
}

//--- modificar tutor

obtenerTutorPorId3(tutorId: string) {
  return this.firestore.collection('tutores').doc(tutorId).valueChanges();
}

actualizarTutor(tutorId: string, tutorData: any) {
  return this.firestore.collection('tutores').doc(tutorId).update(tutorData);
}


async obtenerTutorPorId(tutorId: string) {
  try {
    // Obtener el usuario autenticado
    const user = getAuth().currentUser;

    if (user) {
      // Usar el UID del usuario autenticado para acceder a la colección de tutores
      const tutorDocRef = doc(getFirestore(), `users/${user.uid}/tutores`, tutorId);
      const tutorDocSnap = await getDoc(tutorDocRef);

      if (tutorDocSnap.exists()) {
        console.log('Documento de tutor:', tutorDocSnap.data()); // Verifica los datos que estás obteniendo
        return tutorDocSnap.data(); // Devuelve los datos si el documento existe
      } else {
        console.log('No se encontró el documento de este tutor.');
        return null; // Si no existe, devuelve null
      }
    } else {
      console.log('No hay usuario autenticado');
      return null;
    }
  } catch (error) {
    console.error('Error al obtener los datos del tutor:', error);
    return null; // Retorna null si ocurre un error
  }
}


 // Método para agregar una mascota
 agregarMascota(path: string, mascota: any) {
  const ref = this.firestore.collection(path); // Accede a la colección en Firestore

  return ref.add(mascota); 
}

// Método para obtener los datos de una mascota
obtenerMascotas(path: string) {
  return this.firestore.collection(path).snapshotChanges(); // Obtiene los cambios en la colección
}




//------------------------------------------------------------------------------
// almacenamiento de imagen firebase (no se puedo utilizar)

addFoto(path: string, data:any){
  return addDoc(collection(getFirestore(),path),data);
}

async guardarImagen(path: string, data_url: string){
  return uploadString(ref(getStorage(),path),data_url,'data_url').then(()=>{
    return getDownloadURL(ref(getStorage(),path))
  })
}

}
