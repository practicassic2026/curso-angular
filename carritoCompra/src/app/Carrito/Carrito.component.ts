import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../Carrito.service';
import { Producto } from '../Producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './Carrito.component.html',
  styleUrls: ['./Carrito.component.css']
})
export class CarritoComponent {

  constructor(private servicioCarrito : CarritoService, private router:Router) {
    
   }

  
  getProductos(){
    return this.servicioCarrito.getProducts();

  }

  //Devuelve la suma de los precios de los productos de la cesta.
  getTotal(){
    return this.servicioCarrito.getTotal();
  }

  getCantidad(id:number){
    for (let p of this.servicioCarrito.getProducts()){
      if (p.id === id){
        return p.cantidad;
      }
    }
  }

  //Añade un producto a la cesta.
  addProduct(id:number){
    this.servicioCarrito.addCantidad(id);
  }

  //Elimina un producto de la cesta.
  delProduct(id:number){
    this.servicioCarrito.reduceCantidad(id);
  }

  //Al pulsar el botón "Home" se llama a este metodo y lo redirige.
  goHome(){
    this.router.navigate(['home']);
  }

  vacio = true;

  

}
