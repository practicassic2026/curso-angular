import { Component } from '@angular/core';
import { CarritoService } from '../Carrito.service';
import { Producto } from '../Producto';


@Component({
  selector: 'app-productos',
  imports: [],
  standalone: true,
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  constructor(private miServicio:CarritoService){

  }

      Productos : Producto[] = [
        {id: 1, nombre: "Agua", precio: 0.98},
        {id: 2, nombre: "Cereales", precio: 2.56},
        {id: 3, nombre: "Detergente", precio: 2.34},
        {id: 4, nombre: "Colacao", precio: 5.23}
      ];
    
}
