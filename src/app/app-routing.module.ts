import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
        {path:'', component:InicioComponent},
        {path:'home', component:HomeComponent},
        {path:'post', component:PostComponent},
        {path:'formulario', component:FormularioComponent},
        {path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
