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
  clearOnAddNumber: boolean;

  constructor() {
    this.previousNumber = "";
    this.currentNumber = "0";
    this.currentOperation = "";
    this.clearOnAddNumber = true;
  }

  public addNumber(num: string) {
    if (this.clearOnAddNumber) {
      this.currentNumber = "";
      this.clearOnAddNumber = false;
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
    this.clearOnAddNumber = true;
  }

  public clearEverything() {
    this.previousNumber = "";
    this.currentOperation = "";
    this.clearNumber();
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

  public equals() {
    if (this.previousNumber != "" && this.currentOperation != "" && this.currentNumber != "") {
      this.calculate();
    }
    else if (this.previousNumber == "" && this.currentNumber != "") {
      this.previousNumber = this.currentNumber;
      this.clearNumber();
    }
  }

  private calculate() {
    var calculation = this.previousNumber + this.currentOperation + this.currentNumber;

    calculation = calculation
      .replace(',', '.')
      .replace(',', '.') // only one occurance is replaced but we have up to two
      .replace('x', '*')
      .replace('÷', '/')

    this.currentNumber = "" + math.evaluate(calculation);
    this.currentNumber.replace('.', ',');
    this.previousNumber = this.currentNumber;
    this.clearOnAddNumber = true;
  }
}
