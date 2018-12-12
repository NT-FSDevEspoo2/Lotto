export class LottoTicket {
    private numbers: Number[];

    constructor(numbers: Number[]) {
        this.numbers = numbers;
    }

    get getNumbers(): Number[] {
        return this.numbers;
    }
}
