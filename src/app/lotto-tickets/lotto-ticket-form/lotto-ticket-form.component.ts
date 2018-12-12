import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LottoTicket } from 'src/app/lotto-ticket';
import { LottoService } from 'src/app/lotto.service';

@Component({
    selector: 'lotto-ticket-form',
    templateUrl: './lotto-ticket-form.component.html',
    styleUrls: ['./lotto-ticket-form.component.css']
})
export class LottoTicketFormComponent implements OnInit {

    selectedNumbers: Array<Number> = [];

    constructor(private lottoService: LottoService) { }

    ngOnInit() {
    }

    select(number) {
        if (this.selectedNumbers.includes(number)) {
            this.selectedNumbers.splice(this.selectedNumbers.indexOf(number), 1);
            console.log("Deselected " + number);
        } else {
            if (this.selectedNumbers.length < 7) {
                this.selectedNumbers.push(number);

                console.log("Selected " + number);
            }
        }
    }

    purchase() {
        if (!this.validate()) {
            return;
        }

        var ticket = new LottoTicket(this.selectedNumbers);

        this.lottoService.purchaseTicket(ticket);

        this.selectedNumbers = [];
    }

    validate() {
        return this.selectedNumbers.length === 7;
    }

    array(n: number): any[] {
        return Array(n);
    }
}
