import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CortoDetail } from '../corto-detail';
import { CortoService } from '../corto.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-corto-detail',
  templateUrl: './corto-detail.component.html',
  styleUrls: ['./corto-detail.component.css']
})
export class CortoDetailComponent implements OnInit, OnDestroy {
  corto : CortoDetail
  constructor(private cortoService : CortoService, private route : ActivatedRoute) { }
  @Input() corto_id : number;
  loader : any;
  ngOnInit() {
    this.loader = this.route.params.subscribe((params : Params)=> this.onLoad(params));
  }
  onLoad(params)
  {
    this.corto_id = parseInt(params['id']);
    
    this.corto = new CortoDetail(0,"hola","asd");
    this.getCortoDetail();
  }
  getCortoDetail():void{
    this.cortoService.getCorto(this.corto_id).subscribe
    (corto => this.corto = corto);
  }
  ngOnDestroy(){
    this.loader.unsubscribe();
  }
}
