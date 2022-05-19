import { Pais } from "./pais";

export class Actor {
    id: number;
    nombre: string;
    apellido: string; 
    sexo: string;
    fechaDeNacimiento: Date;
    pais: Pais;

    constructor(){}
}
