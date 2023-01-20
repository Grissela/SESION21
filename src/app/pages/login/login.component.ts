import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent implements OnInit {

  user:string="AD"
  pas:string="12345"

  username!:string;
  password!:string;

  new_user!:string | null;
  new_pass!:string | null;

  token="true";
  load!:boolean;

  seleccionado:boolean=false;
  constructor(private route:Router) {
    this.load=false;
   }

  
  ngOnInit(): void {
    
  }
  
  validacion(){
    // localStorage.setItem('user','AD');
    // localStorage.setItem('pas','12345')

    // this.new_user = localStorage.getItem('user');
    // this.new_pass = localStorage.getItem('pas');

    if(this.user == this.username && this.pas==this.password && this.seleccionado){
      localStorage.setItem('logeado',this.token);
      this.route.navigate(['login']);
      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Datos correctos',
        showConfirmButton: false,
        timer: 1500
      })
      
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Datos Incorrectos',
      text: 'Ingresa las credenciales correctas',
      footer: '<a href="">¿Porqué me sale este error?</a>'
    })
  }
}

}


