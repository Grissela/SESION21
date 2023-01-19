import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissesGuard } from './guard/permisses.guard';
import { SinguardarGuard } from './guard/singuardar.guard';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
        {path:'login', component:LoginComponent},
        {path:'home', component:HomeComponent, canActivate:[PermissesGuard]},
        {path:'post', component:PostComponent,  canActivate:[PermissesGuard]},
        {path:'formulario', component:FormularioComponent, canActivate:[PermissesGuard],
         canDeactivate:[SinguardarGuard]}
        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
