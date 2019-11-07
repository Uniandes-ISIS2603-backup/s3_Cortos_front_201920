import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cliente-crear',
  templateUrl: './cliente-crear.component.html',
  styleUrls: ['./cliente-crear.component.css']
})
export class ClienteCrearComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clientService: ClienteService,
    private formBuilder: FormBuilder, private toastr: ToastrService) { 
      this.clientForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      correo: ["", Validators.required],
      contrasenia: ["", Validators.required]
    }); 
  }

  clientForm: FormGroup;

   createClient(newClient: Cliente) {
    // Process checkout data here
    console.warn("el cliente fue creado", newClient);

    this.clientService.createClient(newClient).subscribe(client => {
      this.clientes.push(client);
    });
    this.clientForm.reset()
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.success("Cliente", "Creado exitosamente!", {"progressBar": true,timeOut:3000});
  }

  ngOnInit() {
    this.clientService
      .getClientes()
      .subscribe(clientes => (this.clientes = clientes));
  }

}
