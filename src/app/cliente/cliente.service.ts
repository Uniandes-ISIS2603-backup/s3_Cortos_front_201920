import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cliente} from './cliente';
import {ClienteDetail} from './cliente-detail';
import { catchError, map, tap } from "rxjs/operators";

import {Observable} from 'rxjs';

const API_URL = "http://localhost:8080/s3_cortos-api/api/cliente";
const clientes = "clientes.json";

@Injectable()
export class ClienteService {

  private clientesUrl = "http://localhost:8080/s3_cortos-api/api/cliente";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })};

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(API_URL);
  }

  getClienteRandom(): Observable<Cliente>{
    return this.http.get<Cliente>(API_URL + "/random");
  }

  getClientesNombreLike(searc: String): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(API_URL + "/search-"+ searc);
  }

  getClientesNombre(searc): Observable<Cliente>{
    console.warn("Url", API_URL + "/" + searc);
    return this.http.get<Cliente>(API_URL + "/" + searc);
  }

  getClientesDetail(clienteId): Observable<ClienteDetail>{
    return this.http.get<ClienteDetail>(API_URL + "/" + clienteId);
  }

  createClient(client: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.clientesUrl, client, this.httpOptions).pipe(tap((client: Cliente) => console.log(`added editorial w/ ${client.nombre} id=${client.id}`)));
  }

  deleteClient(client: Cliente | number): Observable<Cliente> {
    const id = typeof client === "number" ? client : client.id;
    const url = `${this.clientesUrl}/${id}`;

    return this.http.delete<Cliente>(url, this.httpOptions);
  }

  updateClient(client: Cliente): Observable<any> {
    return this.http.put(this.clientesUrl, client, this.httpOptions);
  }

}
