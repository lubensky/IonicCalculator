import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: 'calculator.page.html',
  styleUrls: ['calculator.page.scss']
})
export class CalculatorPage {
  currentNumber: string;

  constructor() {
    this.currentNumber = "0";
  }

  public addNumber(num: string) {
    if (this.currentNumber == "0") {
      this.currentNumber = "";
    }

    this.currentNumber += num;
  }

  public removeNumber() {
    if (this.currentNumber.length > 0) {
      this.currentNumber = this.currentNumber.slice(0, this.currentNumber.length - 1);
    }

    if (this.currentNumber.length == 0) {
      this.clearNumber();
    }
  }

  public clearNumber() {
    this.currentNumber = "0";
  }
}
