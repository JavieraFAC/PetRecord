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

}
export interface Mascota{
    mid: string;
    estado:string;
    nombre: string;
    especie: string;
    raza: string;
    pelaje: string;
    color: string;
    sexo: string;
    esterilizado: boolean;
    fechanacimiento: Date;
    chip: string;
    gsangineo: string;
    caracter: string;
    obs: string;




}