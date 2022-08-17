import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FLIGHT } from '../../flight';
import { FlightService } from '../Flight-Service/flight.service';

@Injectable({
    providedIn: 'root'
})
export class DummyFlightService implements FlightService {

    constructor() {
    }

    find(from: string, to: string): Observable<FLIGHT[]> {
        return of([
            { id: 1, from: 'Frankfurt', to: 'Flagranti', date: '2022-01-02T19:00+01:00' },
            { id: 2, from: 'Frankfurt', to: 'Kognito', date: '2022-01-02T19:30+01:00' },
            { id: 3, from: 'Frankfurt', to: 'Mallorca', date: '2022-01-02T20:00+01:00' },
        ]);
    }
}
