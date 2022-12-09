import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalculatorPageRoutingModule } from './calculator-routing.module';

import { CalculatorPage } from './calculator.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CalculatorPageRoutingModule,
  ],
  declarations: [CalculatorPage]
})
export class CalculatorPageModule {}
