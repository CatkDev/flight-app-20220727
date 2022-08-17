import { Component, OnInit } from '@angular/core';
import { FLIGHT } from '../flight';
import { FlightService } from '../Services/Flight-Service/flight.service';
import { DummyFlightService } from '../Services/Dummy-Flight-Service/dummy-flight.service';

@Component({
    selector: 'app-flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

    from = 'Hamburg';
    to = 'Graz';
    date: string = (new Date()).toISOString();
    flights: Array<FLIGHT> = [];
    selectedFlight: FLIGHT | null = null;
    basket: {[key: number]: boolean} = {
        3: true,
        5: true
    };

    constructor(private flightService: FlightService) {
        if (flightService instanceof DummyFlightService) {
            console.log('Eigentlich bin ich ein DummyFlightService');
        }
    }

    ngOnInit(): void {
    }

    search(): void {

        this.flightService.find(this.from, this.to).subscribe({
            next: (flights) => {
                this.flights = flights;
            },
            error: (err => {
                console.error('Error', err);
            })
        });

        // const url = 'http://demo.ANGULARarchitects.io/api/flight';
        //
        // const headers = new HttpHeaders()
        //     .set('Accept', 'application/json');
        //
        // const params = new HttpParams()
        //     .set('from', this.from)
        //     .set('to', this.to);
        //
        // this.http.get<FLIGHT[]>(url, {headers, params})
        //     .subscribe({
        //         next: (flights) => {
        //             this.flights = flights;
        //         },
        //         error: (err => {
        //             console.error('Error', err);
        //         })
        //     });
    }

    select(f: FLIGHT): void {
        this.selectedFlight = f;
    }

}
