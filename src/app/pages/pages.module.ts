import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@NgModule({
  declarations: [
    HomeComponent,
    PostComponent,
    FormularioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
    
  ],
  exports: [
    HomeComponent,
    PostComponent,
    FormularioComponent,
    LoginComponent
  ]
})
export class PagesModule { }
