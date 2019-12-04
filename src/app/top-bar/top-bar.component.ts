import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.buscarForm = this.formBuilder.group({
      buscar: ["", Validators.required]
    }); 
   }

   buscarForm: FormGroup;


   name: string

   buscarClient(name: string):void
   {
    console.warn("el cliente esta siendo buscado", name);
   }

  ngOnInit() {
  }

}
