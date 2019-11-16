import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CortoListComponent } from './corto-list/corto-list.component';
import { CortoService } from './corto.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CortoDetailComponent } from './corto-detail/corto-detail.component';
import { CortoCreateComponent } from './corto-create/corto-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CortoListComponent, CortoDetailComponent, CortoCreateComponent],
  providers :[CortoService]
})
export class CortoModule { }
