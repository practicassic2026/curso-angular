import { Component } from '@angular/core';
import { CarritoService } from '../Carrito.service';
import { Producto } from '../Producto';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../productos-service';


@Component({
  selector: 'app-productos',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  constructor(private miServicio:CarritoService, private productosService:ProductosService){

  }

    Productos : Producto[] = [];


  ngOnInit(){
    this.Productos = this.productosService.getProducts();

  }

  nombre = "";
  precio = 0;

  createProduct(nombre:string, precio:number){
    const produ : Producto = {id: this.getNextId(), nombre: nombre, precio: precio, cantidad: 0};
    this.productosService.addProduct(produ);
  }

  deleteProduct(id:number){
    this.productosService.deleteProduct(id);
  }


  getNextId(): number {
    let maxId = 0;

    for(let producto of this.Productos){
      if(producto.id > maxId){
        maxId = producto.id;
      }
    }

    return maxId + 1;
}
    
}
