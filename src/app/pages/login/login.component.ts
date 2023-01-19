import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.validacion()
  }

  validacion(){
    localStorage.setItem('user','AD');
    localStorage.setItem('pas','12345')

    this.new_user = localStorage.getItem('user');
    this.new_pass = localStorage.getItem('pas');

    if(this.new_user == this.username && this.new_pass==this.password){
      // alert("correcto")
      localStorage.setItem('logeado',this.token);
      this.route.navigate(['post']);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Datos correctos',
        showConfirmButton: false,
        timer: 1500
      })
      
  }else{
    // alert("Incorrecto")
    Swal.fire({
      icon: 'error',
      title: 'Datos Incorrectos',
      text: 'Ingresa las credenciales correctas',
      footer: '<a href="">¿Porqué me sale este error?</a>'
    })
  }


  

   

}
}
