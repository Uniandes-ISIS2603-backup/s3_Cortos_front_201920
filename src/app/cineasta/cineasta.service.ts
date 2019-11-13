import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Cineasta } from './cineasta';
import { CineastaDetail } from './cineasta-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const cineastas = '/cineasta';


/**
* The service provider for everything related to authors
*/
@Injectable()
export class CineastaService {

    /**
    * Constructor of the service 
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of authors retrieved from the API
    * @returns The list of authors in real time
    */
    getCineastas(): Observable<Cineasta[]> {
        return this.http.get<Cineasta[]>(API_URL + cineastas);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getCineastaDetail(cineastaId): Observable<CineastaDetail> {
        return this.http.get<CineastaDetail>(API_URL + cineastas + '/' + cineastaId);
    }

    /**
    * Creates an author
    * @param author The new author
    * @returns The confirmation that the author was created
    */
    createCineasta(cineasta): Observable<Cineasta> {
        return this.http.post<Cineasta>(API_URL + cineastas, cineasta);
    }

    /**
    * Updates an author
    * @param author The author's information updated
    * @returns The confirmation that the author was updated
    */
    updateCineasta(cineasta): Observable<CineastaDetail> {
        return this.http.put<CineastaDetail>(API_URL + cineastas + '/' + cineasta.id, cineasta);
    }

    /**
    * Deletes an author from the BookStore
    * @param cineastaId The id of the author
    * @returns The confirmation that the author was deleted
    */
    deleteCineasta(cineastaId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + cineastas + '/' + cineastaId);
    }

}