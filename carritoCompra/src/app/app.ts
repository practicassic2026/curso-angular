import { Component, Input, signal } from '@angular/core';
import { Producto } from './Producto';
import { ProductoComponent } from "./Producto/Producto.component";
import { CarritoService } from './Carrito.service';
import { CarritoComponent } from './Carrito/Carrito.component';
import bootstrap

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductoComponent, CarritoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('carritoCompra');

  Productos : Producto[] = [
    {id: 1, nombre: "Agua", precio: 0.98},
    {id: 2, nombre: "Cereales", precio: 2.56},
    {id: 3, nombre: "Detergente", precio: 2.34},
    {id: 4, nombre: "Colacao", precio: 5.23}
  ];

  constructor(private miServicio : CarritoService){
 
  }

  onProductoAdded(producto:Producto){
    //alert(producto.id + "///" + producto.nombre + "///" + producto.precio );

    this.miServicio.addProduct(producto);


  }



}
