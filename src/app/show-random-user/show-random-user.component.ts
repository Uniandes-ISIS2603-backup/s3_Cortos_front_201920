import { Component, OnInit, Input } from '@angular/core';
import {Cliente} from '../cliente/cliente';
import {ClienteService} from '../cliente/cliente.service';

@Component({
  selector: 'app-show-random-user',
  templateUrl: './show-random-user.component.html',
  styleUrls: ['./show-random-user.component.css']
})
export class ShowRandomUserComponent implements OnInit {

  constructor(){
  }

  @Input() cliente: Cliente;

  ngOnInit() {

  }

}
