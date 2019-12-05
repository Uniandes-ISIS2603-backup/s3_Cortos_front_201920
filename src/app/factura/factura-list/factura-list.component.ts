import { Component, OnInit } from '@angular/core';
import {FacturaService} from '../factura.service'
import {Factura} from '../factura';
@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit {
  facturas : Factura[];
  constructor(private fs : FacturaService) { }
  getFacturas(): void{
    this.fs.getFacturas().subscribe(cortos =>this.facturas = cortos);
  }
  ngOnInit() {
    this.getFacturas();
  }

}
