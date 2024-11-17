export interface Usuario{
    uid: string,
    nombre:string,
    apellidos:string,
    run:string,
    celular:number,
    password:string,
    confirmpass:string,
    email:string,
        // complementarios
    imagenPerfil?: string;
    domicilio:string,
    region:string,
            // datos profesionales
    universidad?: string;
    pais?: string;
    especialidad?:string;
    annoTitulacion?:number;
    imagenFirma?:string;
}

export interface especiesUsuario {
    id: string;
    especiesatendidas: string []; // especies que selecciona el usuario
}