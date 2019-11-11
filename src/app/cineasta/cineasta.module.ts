import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CineastaListComponent } from './cineasta-list/cineasta-list.component';
import { CineastaService } from './cineasta.service';
import { CineastaDetailComponent } from './cineasta-detail/cineasta-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CineastaCrearComponent } from './cineasta-crear/cineasta-crear.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CineastaListComponent, CineastaDetailComponent, CineastaCrearComponent],

  exports: [CineastaListComponent],

  providers: [CineastaService]
})
export class ClienteModule { }
