import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  logout(){
    Swal.fire({
      title: '¿Desea salir?',
      text: "¡Esta a punto de cerrar sesión!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo salir!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Cerrado',
          'Tu sesión se ha cerrado',
          'success'
        )
        localStorage.removeItem('logeado');
        localStorage.removeItem('user');
        localStorage.removeItem('pas');

        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('password')
        localStorage.removeItem('confirm');
        localStorage.removeItem('firstname');
        localStorage.removeItem('lastname');
        localStorage.removeItem('age');
        localStorage.removeItem('estado');
        localStorage.removeItem('phone');
        localStorage.removeItem('company');
        localStorage.removeItem('guardado');
        this.route.navigate(['login']);
      }
    })
    
    
  }
}
