// src/app/ts/scheduled-flight.ts

import { FLIGHT } from '../flight';

export class ScheduledFlight implements FLIGHT {

    id = 0;
    from = '';
    to = '';
    date = '';

    distance = 0;

    get unixDate(): number {
        return new Date(this.date).getTime();
    }

    set unixDate(time: number) {
        const date = new Date(time);
        this.date = date.toISOString();
    }

    calcPrice(): number {
        return this.distance / 3;
    }

}
