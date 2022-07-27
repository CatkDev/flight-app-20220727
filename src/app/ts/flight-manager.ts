// src/app/ts/flight-manager.ts
import { FLIGHT } from '../flight';

export class FlightManager {

    private cache: FLIGHT[];

    constructor(cache: FLIGHT[] | null | undefined) {
        if (!cache) {
            cache = [];
        }
        this.cache = cache;
    }

    search3(from: string, to: string): FLIGHT[] {
        return this.cache.filter(f => {
            return f.from === from && f.to === to;
        });
    }

    search2(from: string, to: string): FLIGHT[] {
        const result: FLIGHT[] = this.cache.filter(function (f: FLIGHT) {
            return f.from === from && f.to === to;
        });
        return result;
    }

    search(from: string, to: string): FLIGHT[] {
        const result = new Array<FLIGHT>();
        for (const f of this.cache) {
            if (f.from === from && f.to === to) {
                result.push(f);
            }
        }
        return result;
    }

}
