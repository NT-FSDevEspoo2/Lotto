import { Component, OnInit } from '@angular/core';
import { LottoTicket } from '../lotto-ticket';
import { LottoService } from '../lotto.service';

@Component({
    selector: 'lotto-tickets',
    templateUrl: './lotto-tickets.component.html',
    styleUrls: ['./lotto-tickets.component.css']
})
export class LottoTicketsComponent implements OnInit {
    tickets: Array<LottoTicket> = [];

    constructor(private lottoService: LottoService) { }

    ngOnInit() {
        this.lottoService.getTickets().subscribe(tickets =>
            this.tickets = tickets
        );
    }
}
