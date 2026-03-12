import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practicaCalculadora');

  resultado = 0;

  Multiplicar(Uno:number, Dos:number){
    this.resultado = (Uno * Dos);

  }
  
  Restar(Uno:number, Dos:number){
    this.resultado = (Uno - Dos);

  }

  Sumar(Uno:number, Dos:number){
    this.resultado = (Uno + Dos);

  }

  Dividir(Uno:number, Dos:number){
    this.resultado = (Uno / Dos);

  }

}
