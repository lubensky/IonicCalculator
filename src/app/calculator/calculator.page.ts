import { Component } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-calculator',
  templateUrl: 'calculator.page.html',
  styleUrls: ['calculator.page.scss']
})
export class CalculatorPage {
  previousNumber: string;
  currentNumber: string;
  currentOperation: string;

  constructor() {
    this.previousNumber = "";
    this.currentNumber = "0";
    this.currentOperation = ""
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

    if (this.currentNumber.length == 0 || this.currentNumber == "-") {
      this.clearNumber();
    }
  }

  public clearNumber() {
    this.currentNumber = "0";
  }

  public addComma() {
    if (!this.currentNumber.includes(",")) {
      this.currentNumber += ",";
    }
  }

  public toggleSign() {
    if (this.currentNumber != "0") {
      if (this.currentNumber.startsWith("-")) {
        this.currentNumber = this.currentNumber.slice(1);
      }
      else {
        this.currentNumber = "-" + this.currentNumber;
      }
    }
  }

  public setOperation(operation: string) {
    if (this.previousNumber == "") {
      this.previousNumber = this.currentNumber;
      this.clearNumber();
    }
    else {
      this.calculate();
    }

    this.currentOperation = operation;
  }

  private calculate() {
    var calculation = this.previousNumber + this.currentOperation + this.currentNumber;

    calculation = calculation
      .replace(',', '.')
      .replace('x', '*')
      .replace('÷', '/')

    this.previousNumber = "" + math.evaluate(calculation);
    this.previousNumber = this.previousNumber.replace('.', ',');
    this.clearNumber();
  }
}
