import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FLIGHT } from '../../flight';
import { DefaultFlightService } from '../Default-Flight-Service/default-flight.service';

@Injectable({
    providedIn: 'root',
    useClass: DefaultFlightService
})
export abstract class FlightService {

    constructor() {
    }

    abstract find(from: string, to: string): Observable<FLIGHT[]>;
}
