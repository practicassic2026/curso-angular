import { Component } from '@angular/core';
import { Producto } from '../Producto';
import { CarritoService } from '../Carrito.service';
import { ProductoComponent } from '../Producto/Producto.component';

@Component({
  selector: 'app-home',
  imports: [ProductoComponent],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private miServicio : CarritoService){

  }

  onProductoAdded(producto:Producto){
    //alert(producto.id + "///" + producto.nombre + "///" + producto.precio );

    this.miServicio.addProduct(producto);


  }
    Productos : Producto[] = [
      {id: 1, nombre: "Agua", precio: 0.98},
      {id: 2, nombre: "Cereales", precio: 2.56},
      {id: 3, nombre: "Detergente", precio: 2.34},
      {id: 4, nombre: "Colacao", precio: 5.23}
    ];
  
  
}
