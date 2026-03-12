import { Injectable } from '@angular/core';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productosCarrito : Producto[] = [];

constructor() { }

  addProduct(producto:Producto){
    this.productosCarrito.push(producto);

  }

  getProducts(){
    return this.productosCarrito;

  }

  getTotal(){
    return this.productosCarrito.reduce((total,p) => total + p.precio, 0);
    
  }

}
