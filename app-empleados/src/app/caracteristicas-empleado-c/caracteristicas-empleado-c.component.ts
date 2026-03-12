import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleados } from '../servicio-empleados';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {


    constructor(private miServicio: ServicioEmpleados){
  
    }

   @Output() caracteristicasEmpleados = new EventEmitter<string>();

   agregaCaracteristicas(value:string){
    this.miServicio.muestraMensaje("La caracteristica que se va a agregar es: " + value);

    this.caracteristicasEmpleados.emit(value);

   }
   
  ngOnInit() {
  }

}
