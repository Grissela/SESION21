import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SinguardarGuard implements CanDeactivate<unknown> {

  constructor(private route:Router){
    
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(localStorage.getItem('guardado')){
      return true;
    }
    
     return confirm ('esta saliendo sin guardar cambios')
      // Swal.fire({
      //   title:'¿Desea salir sin guardar cambios?',
      //   icon: 'question',
      //   iconHtml: '؟',
      //   confirmButtonText: 'Si',
      //   cancelButtonText: 'No',
      //   showCancelButton: true,
      //   showCloseButton: true
        
      // })
      
      
    
   
   
  }
   

  
  
}
