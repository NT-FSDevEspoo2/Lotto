import { Component, OnInit, Input } from '@angular/core';
import { LottoTicket } from 'src/app/lotto-ticket';
import { LottoService } from 'src/app/lotto.service';

@Component({
    selector: 'lotto-ticket',
    templateUrl: './lotto-ticket.component.html',
    styleUrls: ['./lotto-ticket.component.css']
})
export class LottoTicketComponent implements OnInit {

    @Input() ticket: LottoTicket;
    @Input() index: Number;
    displayCorrect: Boolean = false;

    constructor(private lottoService: LottoService) { }

    ngOnInit() {
        this.lottoService.isResultsPublished().subscribe(resultsPublished => {
            this.displayCorrect = resultsPublished;
        });
    }

    isNumberCorrect(number) {
        return this.lottoService.isNumberCorrect(number);
    }
}
