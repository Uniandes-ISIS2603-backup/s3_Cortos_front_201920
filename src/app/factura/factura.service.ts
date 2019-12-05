import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {Factura} from './factura';
const API_URL = "http://localhost:8080/s3_cortos-api/api/cortos";
@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  
  constructor(private http : HttpClient) { }
  getFacturas(): Observable<Factura[]>{
    return this.http.get<Factura[]>(API_URL);
  }
  getFactura(facturaId):Observable<Factura>{
    return this.http.get<Factura>(API_URL+"/"+facturaId);
  }
  createFactura(corto: Factura): Observable<Factura>{
    return this.http.post<Factura>(API_URL, corto);
  } 
  
}
