import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  imports: [CommonModule, FormsModule], //FormsModule se importa para que funcione ngModel en el template
  templateUrl: './empleado.html',
  styleUrl: './empleado.css',
  //styles: ["p{background-color: blue};"]
  //template: `<p> Aquí va un empleado! </p>`
})
export class Empleado {

  nombre = "Juan";
  apellido = "García";
  edad = 8;
  empresa = "FC Barcelona";

  habilitacion = false;

  usuRegistrado = false;

  textoRegistro = "No hay nadie registrado";


  getRegistroUsuario(){
    this.usuRegistrado = true;
  }

  llamaEmpresa(value:String){

  }

  setUsuarioRegistrado(event:Event){
    //alert("El usuario se ha registrado.");

    //this.textoRegistro = "El usuario se ha registrado correctamente.";
    
    //alert(event.target);

    if((<HTMLInputElement>event.target).value  =="si"){
      this.textoRegistro= "El usuario se ha registrado correctamente.";

    }else{
      this.textoRegistro= "No hay nadie registrado";
    }

  }


}