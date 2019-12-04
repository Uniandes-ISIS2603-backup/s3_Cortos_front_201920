import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente/cliente';

@Component({
  selector: 'app-auth-confirm',
  templateUrl: './auth-confirm.component.html',
  styleUrls: ['./auth-confirm.component.css']
})
export class AuthConfirmComponent implements OnInit {

  @Input() client: Cliente;

  constructor() { }

  ngOnInit() {
  }

}
