import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  username!:string;
  email!:string;
  password!:string;
  confirm!:string;
  firstname!:string;
  lastname!:string;
  age!:string;
  estado!:string;
  phone!:string;
  company!:string;

  usuario!:string;
  correo!:string;
  contrasena!:string;
  confirmar!:string;
  primerNombre!:string;
  Apellido!:string;
  Edad!:string;
  EstadoC!:string;
  Telefono!:string;
  Empresa!:string;


  new_username!:string;
  new_email!:string;
  new_password!:string;
  new_confirm!:string;
  new_firstname!:string;
  new_lastname!:string;
  new_age!:string;
  new_estado!:string;
  new_phone!:string;
  new_company!:string;

  thead!:string




  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    localStorage.setItem('username',this.username);
    localStorage.setItem('email',this.email);
    localStorage.setItem('password',this.password);
    localStorage.setItem('confirm',this.confirm);
    localStorage.setItem('firstname',this.firstname);
    localStorage.setItem('lastname',this.lastname);
    localStorage.setItem('age',this.age);
    localStorage.setItem('estado',this.estado);
    localStorage.setItem('phone',this.phone);
    localStorage.setItem('company',this.company);

  }
  mostrar(){
    

    this.usuario='User name'
    this.correo='Email'
    this.contrasena='Password'
    this.confirmar='Confirm password'
    this.primerNombre='First name'
    this.Apellido='Last name'
    this.Edad='Age'
    this.EstadoC='Estado Civil'
    this.Telefono='Phone'
    this.Empresa='Company'
    
    this.new_username = String(localStorage.getItem('username'));
    this.new_email = String(localStorage.getItem('email'))
    this.new_password = String(localStorage.getItem('password'))
    this.new_confirm = String(localStorage.getItem('confirm'))
    this.new_firstname = String(localStorage.getItem('firstname'))
    this.new_lastname = String(localStorage.getItem('lastname'))
    this.new_age = String(localStorage.getItem('age'))
    this.new_estado = String(localStorage.getItem('estado'))
    this.new_phone = String(localStorage.getItem('phone'))
    this.new_company = String(localStorage.getItem('company'))


  }

}
