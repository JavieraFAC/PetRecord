import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DBloginService {

  constructor() {}

  // Guardar datos en localStorage
  setdatoVeterinario(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Obtener datos de localStorage
  getdatoVeterinario(key: string): any {
    const datoVeterinario = localStorage.getItem(key);
    return datoVeterinario ? JSON.parse(datoVeterinario) : null;
  }

  // Verificar si el correo ya existe (evitar duplicados)
  existeCorreo(correo: string): boolean {
    const usuarios = this.getdatoVeterinario('usuarios') || [];
    return usuarios.some((usuario: any) => usuario.correo === correo);
  }

  // Registrar un nuevo usuario (controlando duplicados)
  registrarUsuario(datosUsuario: any): boolean {
    const usuarios = this.getdatoVeterinario('usuarios') || [];

    if (this.existeCorreo(datosUsuario.correo)) {
      return false; // El correo ya está registrado
    }

    usuarios.push(datosUsuario);
    this.setdatoVeterinario('usuarios', usuarios);
    return true; // Registro exitoso
  }

  // Validar inicio de sesión con correo y contraseña
  login(correo: string, password: string): boolean {
    const usuarios = this.getdatoVeterinario('usuarios') || [];
    const usuario = usuarios.find((user: any) => user.correo === correo && user.password === password);

    if (usuario) {
      // Guardar token de autenticación en localStorage
      localStorage.setItem('token', JSON.stringify({ correo: usuario.correo }));
      return true; // Inicio de sesión exitoso
    }
    return false; // Credenciales incorrectas
  }

  // Verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('token');
  }

  // Eliminar un dato específico de localStorage
  removedatoVeterinario(key: string): void {
    localStorage.removeItem(key);
  }

  // Limpiar todo el localStorage
  clear(): void {
    localStorage.clear();
  }
}
