import { Component, OnInit } from '@angular/core';
import { LottoService } from '../lotto.service';

const maxNumber = 40;
const rolledNumberCount = 7;

@Component({
    selector: 'lotto-balls',
    templateUrl: './lotto-balls.component.html',
    styleUrls: ['./lotto-balls.component.css']
})
export class LottoBallsComponent implements OnInit {
    availableNumbers: Array<Number> = [];
    rolledNumbers = [];

    constructor(private lottoService: LottoService) {
    }

    ngOnInit() {
        this.lottoService.isResultsPublished().subscribe(resultsPublished => {
            if (!resultsPublished) {
                this.init();
            }
        });

        this.init();
    }

    init() {
        this.initAvailableNumbers();

        this.rolledNumbers = [];
    }

    initAvailableNumbers() {
        for (var i = 1; i <= maxNumber; i++) {
            this.availableNumbers.push(i);
        }
    }

    roll() {
        for (var i = 0; i < rolledNumberCount; i++) {
            var randomNumber = Math.floor(Math.random() * (this.availableNumbers.length - 1) + 1);

            var rolledNumber = this.availableNumbers.splice(randomNumber, 1);

            this.rolledNumbers.push(rolledNumber);
        }

        this.lottoService.publishResults(this.rolledNumbers);
    }
}
