import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {Corto} from './corto';
import{CortoDetail} from './corto-detail';
const API_URL = "http://localhost:8080/s3_cortos-api/api/cortos";
@Injectable()
export class CortoService {
  private cortosUrl = API_URL;
 
  constructor(private http : HttpClient) { }
  getCortos(): Observable<Corto[]>{
    return this.http.get<Corto[]>(API_URL);
  }
  getCorto(cortoId):Observable<CortoDetail>{
    return this.http.get<CortoDetail>(API_URL+"/"+cortoId);
  }
  createCorto(corto: Corto): Observable<Corto>{
    return this.http.post<Corto>(this.cortosUrl, corto);
  } 
  getCortosNombreLike(searc: String): Observable<Corto[]>{
    return this.http.get<Corto[]>(API_URL + "/search-"+ searc);
  }
}
