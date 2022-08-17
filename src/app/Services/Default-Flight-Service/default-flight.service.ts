import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FLIGHT } from '../../flight';
import { FlightService } from '../Flight-Service/flight.service';

@Injectable({
    providedIn: 'root'
})
export class DefaultFlightService implements FlightService {

    constructor(private http: HttpClient) {
    }

    find(from: string, to: string): Observable<FLIGHT[]> {
        const url = 'http://demo.ANGULARarchitects.io/api/flight';
        const headers = new HttpHeaders().set('Accepp', 'application/json');
        const params = new HttpParams().set('from', from).set('to', to);
        return this.http.get<FLIGHT[]>(url, {headers, params});
    }
}
