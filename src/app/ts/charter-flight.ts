import { FLIGHT } from '../flight';

export class CharterFlight implements FLIGHT {

    id = 0;
    from = '';
    to = '';
    date = '';

    distance = 0;

    calcPrice(): number {
        return this.distance / 2;
    }
}
