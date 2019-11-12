import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute,Params} from '@angular/router';
import{ComentarioService} from '../comentario.service';
import{ComentarioDetail} from '../comentario-detail';
import{Comentario} from '../comentario';
@Component({
  selector: 'app-comentario-detail',
  templateUrl: './comentario-detail.component.html',
})
export class ComentarioDetailComponent implements OnInit {

  constructor(
    private comentarioService:ComentarioService,
    private route: ActivatedRoute
  ) { }


  @Input() comentarioDetail:ComentarioDetail;

  comentario_id:number;

  loader:any;

  getComentarioDetail():void{
    this.comentarioService.getComentarioDetail(this.comentario_id).subscribe(comentarioDetail=>{this.comentarioDetail=comentarioDetail});
  }

  onLoad(params){
    this.comentario_id= parseInt(params['id']);
    console.log("en detail" + this.comentario_id);
    this.getComentarioDetail();
  }

  ngOnInit() {
   this.loader=this.route.params.subscribe((params:Params)=> this.onLoad(params));
  }

  ngOndestroy()
  {
    this.loader.unsubscribe();
  }

}