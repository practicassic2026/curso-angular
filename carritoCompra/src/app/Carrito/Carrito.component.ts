import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../Carrito.service';
import { Producto } from '../Producto';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './Carrito.component.html',
  styleUrls: ['./Carrito.component.css']
})
export class CarritoComponent {

  constructor(private servicioCarrito : CarritoService) {
    
   }

  
  getProductos(){
    return this.servicioCarrito.getProducts();

  }

  getTotal(){
    return this.servicioCarrito.getTotal();
  }

  getCantidad(){
    
  }

  addProduct(p:Producto){

  }

  vacio = true;

  

}
