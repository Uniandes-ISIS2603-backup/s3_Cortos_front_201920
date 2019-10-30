import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent],

  exports: [ClienteListComponent],

  providers: [ClienteService]  
})
export class ClienteModule { }
