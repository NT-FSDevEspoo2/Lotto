import { Injectable } from '@angular/core';
import { LottoTicket } from './lotto-ticket';
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LottoService {
    private tickets: Array<LottoTicket> = [];
    private rolledNumbers: Array<Number> = [];
    private resultsPublished: Boolean = false;

    constructor() { }

    purchaseTicket(ticket: LottoTicket) {
        if (this.resultsPublished === true) {
            this.tickets = [];
            this.rolledNumbers = [];
            this.resultsPublished = false;
        }

        this.tickets.push(ticket);
    }

    publishResults(rolledNumbers: Number[]) {
        this.rolledNumbers = rolledNumbers;

        console.log(this.rolledNumbers);
        this.resultsPublished = true;
    }

    isNumberCorrect(number): Boolean {
        return this.rolledNumbers.includes(number);
    }

    getTickets(): Observable<LottoTicket[]> {
        return of(this.tickets);
    }

    isResultsPublished(): Observable<Boolean> {
        return of(this.resultsPublished);
    }
}
