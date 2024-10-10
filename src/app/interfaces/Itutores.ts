export interface IMascota {
    Nombre: string;
    Especie: string;
    Raza: string;
    Edad: number;
  }

export interface Itutores {

    // averiguar StorageModule y SQLite
    // como enviar coreos desde ionic
    // se puede usar firebase como bd solamente
    // mantener sesion iniciada con ionic


    Nombre:string;
    Apellidos:string;
    Run:number;
    Direccion:string;
    Telefono:number;
    Correo:string;
    Mascotas: IMascota[];
}
