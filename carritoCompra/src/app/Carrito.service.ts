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

  //Devuelve la suma de los precios de los productos de la cesta.
  getTotal(){
    return this.productosCarrito.reduce((total,p) => total + p.precio, 0);
    
  }

}
