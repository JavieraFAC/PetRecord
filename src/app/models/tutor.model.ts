export interface Tutor{
    id: string;
    nombre:string,
    apellido:string,
    run: string,
    direccion:string,
    ciudad: string,
    telefono:number,
    email:string,
    obs: string;
    mascotas: Mascota[];

}
export interface Mascota{
    estado:string;
    nombre: string;
    especie: string;
    raza: string;
    pelaje: string;
    color: string;
    sexo: string;
    esterilizado: string;
    fechanacimiento: Date;
    chip: string;
    gsangineo: string;
    caracter: string;
    obs: string;




}