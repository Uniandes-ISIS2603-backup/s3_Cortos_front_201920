import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import {Cliente} from '../cliente';
import {ClienteService} from '../cliente.service';
import {ClienteDetail} from '../cliente-detail';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

  constructor(private clienteService: ClienteService, private route: ActivatedRoute) {
    
   }

  clienteDetail: ClienteDetail;

  @Input() cliente_id: number;

  loader:any;

  getClienteDetail():void{
    this.clienteService.getClientesDetail(this.cliente_id)
    .subscribe(clienteDetail => this.clienteDetail = clienteDetail);
  }


  onLoad(params)
  {
    this.cliente_id = parseInt(params['id']);
    console.log("en detail" + this.cliente_id);
    this.clienteDetail = new ClienteDetail(0,"");
    this.getClienteDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params)); 
  }

  ngOndestroy()
  {
    this.loader.unsubscribe();
  }

}
