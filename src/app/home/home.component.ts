import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente/cliente';
import {ClienteService} from '../cliente/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private clienteService: ClienteService){
  }

  cliente: Cliente;

  loader:any;

  getCliente():void{
    this.clienteService.getClienteRandom().subscribe(clients => this.cliente = clients);
  }

  ngOnInit() {
    this.getCliente();
  }
}
