import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Empleados } from "./empleados/empleados";
import { Empleado } from "./empleado/empleado";

@Component({
  selector: 'app-raiz',
  imports: [Empleados, Empleado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('miPrimeraApp');
  saludo = "Hola mundo entero.";
}
