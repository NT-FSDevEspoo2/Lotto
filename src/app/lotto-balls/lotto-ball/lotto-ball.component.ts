import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'lotto-ball',
    templateUrl: './lotto-ball.component.html',
    styleUrls: ['./lotto-ball.component.css']
})
export class LottoBallComponent implements OnInit {

    @Input() number: Number;
    @Input() size: Number = 100;
    @Input() correct: Boolean = false;

    constructor() { }

    ngOnInit() {
    }

}
