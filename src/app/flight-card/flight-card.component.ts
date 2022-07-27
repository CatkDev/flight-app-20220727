import { Component, Input, Output, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FLIGHT } from '../flight';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-flight-card',
    templateUrl: './flight-card.component.html',
    styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnChanges, OnInit{

    @Input() item: FLIGHT | null = null;
    @Input() selected = false;
    @Output() selectedChange = new EventEmitter<boolean>();

    constructor() {
        console.debug('constructor', this.item);
    }

    ngOnInit() {
        this.selectedChange.next(true);
        console.debug('ngOnInit', this.item);
    }

    ngOnChanges(changes: SimpleChanges) {
        console.debug('ngOnChanges', this.item);
        if (changes.item) {
            console.debug('ngOnChanges', this.item);
        }
        if (changes.selected) {
            console.debug('ngOnChanges: selected');
        }
    }

    select(): void {
        this.selected = true;
        this.selectedChange.emit(true);
    }

    deselect(): void {
        this.selected = false;
        this.selectedChange.emit(false);
    }

}
