import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ComentarioService} from '../comentario.service';
import {Comentario} from '../comentario';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comentario-create',
  templateUrl: './comentario-create.component.html',
  styleUrls: ['./comentario-create.component.css']
})
export class ComentarioCreateComponent implements OnInit {

  comentarios:Comentario[];
  comentarioForm:FormGroup;
  constructor(  private comentarioService:ComentarioService, private formBuilder :FormBuilder, private router: Router,private toastr: ToastrService) { 
    
    this.comentarioForm= this.formBuilder.group({
      id:["",Validators.required],
      comentario:["",Validators.required],
      fecha:["",Validators.required]
    });
  }

 

  createComentario(newComentario: Comentario)
  {
   
    this.comentarioService.createComentario(newComentario).subscribe(comment =>{this.comentarios.push(comment);});
    console.warn("Su comentario ha sido creado",newComentario);
    this.comentarioForm.reset();
    this.showSuccess();
  }
   showSuccess() {
    this.toastr.success("Cliente", "Creado exitosamente!", {"progressBar": true,timeOut:3000});
  }
  ngOnInit() {}
}