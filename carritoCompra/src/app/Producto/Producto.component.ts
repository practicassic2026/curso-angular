import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../Producto';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-producto',
  standalone: true,
  templateUrl: './Producto.component.html',
  styleUrls: ['./Producto.component.css'],
  imports: [RouterModule]
})
export class ProductoComponent {

  constructor(private router : Router){

  }

  @Input() producto! : Producto;

  @Output() productoEmitido = new EventEmitter<Producto>();

  addToCarrito(evento:Event){
    this.producto.cantidad = this.producto.cantidad + 1;
    this.productoEmitido.emit(this.producto);
  }


  
  goUpdateProducto(id:number){
    this.router.navigate(['editar-producto', id]);
  }
}
