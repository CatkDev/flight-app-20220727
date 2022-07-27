// src/app/ts/flight-invoice.ts

import { FLIGHT } from '../flight';

export class FlightInvoice<T extends FLIGHT> {

    constructor(readonly subject: T, readonly price: number) {
    }

    toString(): string {
        const id = this.subject.id; // Klappt nun! 
        return `${id}: ${this.price}`;
    }

}
