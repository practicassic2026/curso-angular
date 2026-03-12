import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioEmpleados {
  

  muestraMensaje(mensaje:string){

    alert(mensaje);
    

  }
}
