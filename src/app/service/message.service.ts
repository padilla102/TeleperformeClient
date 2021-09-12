import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
    mensajeSuccess: string;
    mensajeWarning: string;
    mensajeDanger: string;
    mensajeInfo: string;
    constructor() { }


    success(msj: string) {
        this.mensajeSuccess = msj;
    }

    advertencia(msj: string) {
        this.mensajeWarning = msj;
    }

    danger(msj: string) {
        this.mensajeDanger = msj;
    }
}
