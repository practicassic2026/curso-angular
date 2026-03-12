import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'bootstrap';
import { Empleado } from './empleado';
import { EmpleadoHijoC } from './empleado-hijo-c/empleado-hijo-c';
import { ServicioEmpleados } from './servicio-empleados';

@Component({
  selector: 'app-root',
  imports: [FormsModule, EmpleadoHijoC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Lista de empleados');

  titulo = 'Lista de empleados';

  constructor(private miServicio: ServicioEmpleados){


  }

  empleados:Empleado[]=[
  new Empleado("Juan", "Díaz", "Fontanero", 2400)
  ];
  InsertarEmpleado(nombre:string, apellido:string, cargo:string, salario:number){
    this.miServicio.muestraMensaje("Nombre del empleado: " + nombre);

    this.empleados.push(
      new Empleado(nombre, apellido, cargo, salario),
      new Empleado("Julián", "Barroso", "Fontanero", 4322)
    );
  }
}
