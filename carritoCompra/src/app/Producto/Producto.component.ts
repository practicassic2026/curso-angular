import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../Producto';

@Component({
  selector: 'app-producto',
  standalone: true,
  templateUrl: './Producto.component.html',
  styleUrls: ['./Producto.component.css'],
  imports: []
})
export class ProductoComponent {

  @Input() producto! : Producto;

  @Output() productoEmitido = new EventEmitter<Producto>();

  addToCarrito(evento:Event){
    this.productoEmitido.emit(this.producto);
  }

}
