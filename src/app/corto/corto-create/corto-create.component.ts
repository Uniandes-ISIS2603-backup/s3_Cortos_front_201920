import { Component, OnInit } from '@angular/core';
import { CortoService } from '../corto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Corto } from '../corto';

@Component({
  selector: 'app-corto-create',
  templateUrl: './corto-create.component.html',
  styleUrls: ['./corto-create.component.css']
})
export class CortoCreateComponent implements OnInit {
  cortoForm : FormGroup;
  cortos: Corto[];
  constructor(private cortoService : CortoService, private formBuilder : FormBuilder) {
    this.cortoForm = this.formBuilder.group({
      nombre:["",[Validators.required,Validators.minLength(2)]],
      descripcion:["",Validators.required],
      precio:["", Validators.required]
    })
   }
   createCorto(newCorto: Corto){
     this.cortoService.createCorto(newCorto).subscribe(corto =>{this.cortos.push(corto)});
     this.cortoForm.reset();
     
   }
  ngOnInit() {
    this.cortoService.getCortos().subscribe(cortos =>{this.cortos=cortos});
  }

}
