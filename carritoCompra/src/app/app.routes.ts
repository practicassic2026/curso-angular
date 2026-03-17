import { Routes } from '@angular/router';
import { Home } from './Home/home';
import { Quienes } from './Quienes/quienes';
import { CarritoComponent } from './Carrito/Carrito.component';
import { Productos } from './productos/productos';
import { UpdateProductoComponent } from './UpdateProducto/UpdateProducto.component';


export const routes: Routes = [  
  {path: '', redirectTo: 'home', pathMatch: 'full' },  // ← ruta por defecto
  {path: 'home', component:Home},
  {path: 'quienes', component:Quienes},
  {path: 'productos', component:Productos},
  {path: 'carrito', component:CarritoComponent},
  {path: 'editar-producto/:id', component:UpdateProductoComponent}];
