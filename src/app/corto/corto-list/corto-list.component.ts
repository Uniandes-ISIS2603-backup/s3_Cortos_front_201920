import { Component, OnInit } from '@angular/core';
import{Corto} from '../corto';
import { CortoService } from '../corto.service';
@Component({
  selector: 'app-corto-list',
  templateUrl: './corto-list.component.html',
  styleUrls: ['./corto-list.component.css']
})
export class CortoListComponent implements OnInit {
  cortos : Corto[];
  constructor(private cortoService : CortoService) { }

  getCortos(): void{
    this.cortoService.getCortos().subscribe(cortos =>this.cortos = cortos);
  }
  ngOnInit() {
    this.getCortos();
  }

}
