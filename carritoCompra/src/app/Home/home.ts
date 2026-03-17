import { Component } from '@angular/core';
import { Producto } from '../Producto';
import { CarritoService } from '../Carrito.service';
import { ProductoComponent } from '../Producto/Producto.component';
import { ProductosService } from '../productos-service';

@Component({
  selector: 'app-home',
  imports: [ProductoComponent],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private miServicio : CarritoService, private productosService:ProductosService){

  }
  Productos : Producto[] = [];

  ngOnInit(){
    this.Productos = this.productosService.getProducts();
  }

  onProductoAdded(producto:Producto){
    //alert(producto.id + "///" + producto.nombre + "///" + producto.precio );
    this.miServicio.addProduct(producto);
  }
  

  

}
