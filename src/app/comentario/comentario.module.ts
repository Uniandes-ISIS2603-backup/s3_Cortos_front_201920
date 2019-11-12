import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ComentarioListComponent } from './comentario-list/comentario-list.component'
import { ComentarioService } from './comentario.service';
import { ComentarioDetailComponent } from './comentario-detail/comentario-detail.component';
import { FormsModule } from '@angular/forms';
import { ComentarioCreateComponent } from './comentario-create/comentario-create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [CommonModule,FormsModule,AppRoutingModule,
  ReactiveFormsModule],
  declarations: [ComentarioListComponent, ComentarioDetailComponent, ComentarioCreateComponent],
  exports : [ComentarioListComponent,ComentarioCreateComponent],
  providers: [ComentarioService]
 
})
export class ComentarioModule { }