import { Component, OnInit, Input  } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ClienteService} from '../cliente/cliente.service';
import {Cliente} from '../cliente/cliente';
import { ToastrService } from 'ngx-toastr';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import * as deepEqual from "deep-equal";
import {Corto} from '../corto/corto';
import{CortoService} from '../corto/corto.service';
import { CortoDetail } from '../corto/corto-detail';
 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private cortoService: CortoService,private clientService: ClienteService,
    private formBuilder: FormBuilder, private route: ActivatedRoute, private toastr: ToastrService) { 
      this.searchForm = this.formBuilder.group({
        nombreArtista: ["", Validators.required],
        nombreUsuario: ["", Validators.required],
        
        nombreTema: ["", Validators.required]
      }); 
    }

  searchForm: FormGroup;

  @Input() nombre_Search: String;

  loader:any;
  cortos:Corto[];
  createSearch(formData: any) {
    // Process checkout data here
    let newClients: Cliente[] = [];
    let nameU = this.searchForm.get('nombreArtista').value;
    console.log("buscando " + this.clientes);
    console.log("buscando " + this.searchForm.get('nombreArtista').value);
    this.clientes.forEach((cliente)=>{
      console.log("En Cliente " + cliente.nombre);
      console.log("Comparacion " + cliente.nombre.match(nameU));
      if(cliente.nombre.match(nameU))
      {
        newClients.push(cliente);
        console.log("Equal " + cliente);
      }
    })
    let ncortos : Corto[] = [];
    let nombre = this.searchForm.get('nombreUsuario').value;
    this.cortos.forEach((corto)=>{
      if(corto.nombre.match(nombre)){
        ncortos.push(corto);
      }
    })
    console.log("Result " + newClients);
    this.clientes = newClients;
    this.cortos = ncortos;
  }

  getClienteNombreLike():void{
    this.clientService.getClientesNombreLike(this.nombre_Search)
    .subscribe(clienteDetail => this.clientes = clienteDetail);
  }

  getClientes():void{
    this.clientService.getClientes()
    .subscribe(clienteDetail => this.clientes = clienteDetail);
  }
  getCortosNombreLike():void{
    this.cortoService.getCortosNombreLike(this.nombre_Search).subscribe(CortoDetail => this.cortos = CortoDetail);
  }

  onLoad(params)
  {
    this.nombre_Search = params['search'];
    console.log("buscando " + this.nombre_Search);
    if(this.nombre_Search.match("@all@"))
    {
      this.getClientes();
    }
    else{
      this.getClienteNombreLike();
      this.getCortosNombreLike();
    }
      
    if(this.clientes.length == 0)
    {
      this.showError();
    }

  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params)); 
  }

  ngOndestroy()
  {
    this.loader.unsubscribe();
  }

  showError() {
    this.toastr.error("Error", "No se han encontrado resultados para su busqueda", {"progressBar": true,timeOut:3000});
  }

}
