import { Component, OnInit, ViewChild } from '@angular/core';
import {Comentario} from "../comentario";
import {ComentarioService} from "../comentario.service";
import {ComentarioDetailComponent} from   "../comentario-detail/comentario-detail.component";
import {ComentarioDetail} from  "../comentario-detail";


@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  //styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit{

  constructor(private comentarioService:ComentarioService) { }
    comentarios:Comentario[]=new Array();

  getComentarios():void{
    this.comentarioService.getComentarios().subscribe(comment=>this.comentarios=comment);
  }
  comentario_id:number;
  selectedComentario:ComentarioDetail;

  onSelected(comentario_id:number):void{
    this.comentario_id=comentario_id;
    this.selectedComentario=new ComentarioDetail(0,'sasd',null);
    this.comentarioService.getComentarioDetail(comentario_id).subscribe(o => this.selectedComentario =o);
  }
  ngOnInit() {
        this.getComentarios();
    }
  }



