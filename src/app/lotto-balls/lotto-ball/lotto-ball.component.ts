import { Component, OnInit, Input } from '@angular/core';
import { LottoService } from 'src/app/lotto.service';

@Component({
    selector: 'lotto-ball',
    templateUrl: './lotto-ball.component.html',
    styleUrls: ['./lotto-ball.component.css']
})
export class LottoBallComponent implements OnInit {

    @Input() number: Number;
    @Input() size: Number = 100;
    @Input() displayResult: Boolean = false;

    constructor(private lottoService: LottoService) { }

    ngOnInit() {
    }

    displayCorrect(number) {
        return this.displayResult && this.lottoService.isNumberCorrect(number);
    }
}
