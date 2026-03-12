import { Component, Input, input } from '@angular/core';
import { Empleado } from '../empleado';
import { CaracteristicasEmpleadoCComponent } from '../caracteristicas-empleado-c/caracteristicas-empleado-c.component';

@Component({
  selector: 'app-empleado-hijo-c',
  imports: [CaracteristicasEmpleadoCComponent],
  templateUrl: './empleado-hijo-c.html',
  styleUrl: './empleado-hijo-c.css',
})
export class EmpleadoHijoC {
  
  @Input() empleado!: Empleado;
  @Input() indic: any;
  
  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);

  }


}
