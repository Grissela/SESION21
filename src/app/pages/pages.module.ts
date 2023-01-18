import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormularioComponent } from './formulario/formulario.component';



@NgModule({
  declarations: [
    HomeComponent,
    PostComponent,
    InicioComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    PostComponent,
    InicioComponent,
    FormularioComponent
  ]
})
export class PagesModule { }
