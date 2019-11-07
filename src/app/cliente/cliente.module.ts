import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ClienteCrearComponent } from './cliente-crear/cliente-crear.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent, ClienteCrearComponent],

  exports: [ClienteListComponent],

  providers: [ClienteService]  
})
export class ClienteModule { }
