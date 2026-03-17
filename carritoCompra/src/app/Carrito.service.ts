import { Injectable } from '@angular/core';
import { Producto } from './Producto';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productosCarrito : Producto[] = [];

constructor() {
  const data = localStorage.getItem("carrito");
  this.productosCarrito = data ? JSON.parse(data) : [];
 }

  addProduct(producto:Producto){
    console.log("carrito antes:", this.productosCarrito);

    const existe = this.productosCarrito.find(p => p.id === producto.id);

    if (existe){
      console.log("El producto ya está en el carrito");
    } else {
      console.log("Añadiendo producto");
      this.productosCarrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(this.productosCarrito));
    }
  }

  delProduct(producto:Producto){
    this.productosCarrito = this.productosCarrito.filter(p => p.id !== producto.id);
    localStorage.setItem("carrito", JSON.stringify(this.productosCarrito));
  
  }  
  

  getProducts(){
    return JSON.parse(localStorage.getItem("carrito")!);

  }

  //Devuelve la suma de los precios de los productos de la cesta.
  getTotal(){
    const total = this.productosCarrito.reduce((total,p) => total + (p.precio * p.cantidad), 0);
    return parseFloat(total.toFixed(2));
  }

  addCantidad(id:number){
    for (let p of this.productosCarrito){
      if (p.id === id){
        p.cantidad++;

      }
    }
    localStorage.setItem("carrito", JSON.stringify(this.productosCarrito));
  }

  reduceCantidad(id:number){
    for (let p of this.productosCarrito){
      if(p.id === id){
        if(p.cantidad > 1){
          p.cantidad--;

        }else{
          this.delProduct(p);
          p.cantidad--;
        }
      }
    }
    localStorage.setItem("carrito", JSON.stringify(this.productosCarrito));
  }

}
