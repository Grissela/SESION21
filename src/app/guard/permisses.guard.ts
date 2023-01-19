import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissesGuard implements CanActivate {

  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    if (localStorage.getItem('logeado')){
      return true;
    }
    else{
      this.router.navigate(['login'])
      return false;
    }
  

    // if(!localStorage.getItem('token')){
    //   this.router.navigate([''])
    //   return false;
    // }
    // return true;
    // if(!this.authService.validar() && localStorage.getItem('token')){
    //   this.router.navigate(['']);
    //   alert('No estas logueado');
    //   return true;
    // }else{
    //   alert('Accedido')
    //   return false;
    // }
    
    //  return true;
    // const user=String;
    // const pas=String;
    // if(localStorage.getItem('token')){
    //   return true;
    //   alert('No estas logeado')
    // }else{
    //   alert('Accedido')
    //   return false;
    // }
} 
 
  
  
}
