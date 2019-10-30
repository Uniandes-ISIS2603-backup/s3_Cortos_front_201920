import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from './cliente';
import {ClienteDetail} from './cliente-detail';

import {Observable} from 'rxjs';

const API_URL = "../../assets/";
const clientes = "clientes.json";

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(API_URL + clientes);
  }

  getClientesDetail(clienteId): Observable<ClienteDetail>{
    return this.http.get<ClienteDetail>(API_URL + "cliente-" + clienteId + ".json");
  }

}
