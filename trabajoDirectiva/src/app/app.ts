import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('trabajoDirectiva');

  titulo:String = "Registro de Usuarios";
  mensaje = "";

  nombre = "";
  apellido = "";

  registrado = false;

  entradas: {titulo:string}[];

    constructor() {
      this.entradas = [
        {titulo : "Python cada dia mas presente"},
        {titulo : "Los 40 principales"},
        {titulo : "Viaje al centro de la Tierra"},
        {titulo : "La ciencia moderna"}
      ]
  }

  registrarUsuario(){
    this.mensaje = "Usuario registrado con exito.";
    
    this.registrado = true;
  }


}
