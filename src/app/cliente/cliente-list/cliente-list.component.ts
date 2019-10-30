import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente';
import {ClienteService} from '../cliente.service';

@Component({
  selector: 'cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  clientes: Cliente[];

  getClientes():void{
    this.clienteService.getClientes().subscribe(clients => this.clientes = clients);
  }

  ngOnInit() {
    this.getClientes();
  }
}
