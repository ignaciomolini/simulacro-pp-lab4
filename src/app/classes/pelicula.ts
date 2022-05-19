import { Actor } from "./actor";

export class Pelicula {
    id: number;
    nombre: string;
    tipo: string;
    fechaEstreno: Date;
    cantidadPublico: number;
    foto: string;
    actor: Actor;

    constructor(){}
}
