import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LottoTicket } from 'src/app/lotto-ticket';
import { LottoService } from 'src/app/lotto.service';

@Component({
    selector: 'lotto-ticket-form',
    templateUrl: './lotto-ticket-form.component.html',
    styleUrls: ['./lotto-ticket-form.component.css']
})
export class LottoTicketFormComponent implements OnInit {

    constructor(private lottoService: LottoService) { }

    ngOnInit() {
    }

    purchase() {
        var ticket = new LottoTicket([1, 2, 3, 4, 5, 6, 7]);

        this.lottoService.purchaseTicket(ticket);
    }

    array(n: number): any[] {
        return Array(n);
    }
}
