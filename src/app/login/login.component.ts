import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ClienteService} from '../cliente/cliente.service';
import {Cliente} from '../cliente/cliente';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private clientService: ClienteService,
    private formBuilder: FormBuilder, private toastr: ToastrService) {
      this.clientForm = this.formBuilder.group({
        nombre: ["", [Validators.required, Validators.minLength(2)]],
        correo: ["", Validators.required],
        contrasenia: ["", Validators.required]
      });

     }

     clientForm: FormGroup;

     clientes: Cliente[];

     cliente: Cliente;

     createClient(newClient: Cliente):void
    {
      // Process checkout data here
      console.warn("el cliente fue creado", newClient);
      //this.cliente = new Cliente(0,"Arturo");
      this.clientService.getClientesNombre(newClient.nombre).subscribe(obtenido => this.cliente = obtenido);
      this.clientForm.reset();
      console.warn("el cliente fue encontrado con nombre", newClient.nombre);
      console.warn("el cliente fue encontrado", this.cliente);
    }


  ngOnInit() 
  {

  }

}
