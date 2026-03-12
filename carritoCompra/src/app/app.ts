import { Component, Input, signal } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('carritoCompra');

  constructor(){
 
  }


  


}
