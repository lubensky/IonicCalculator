import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', loadChildren: () => import('./calculator/calculator.module').then(m => m.CalculatorPageModule) },
      ])
  ],
  })
export class AppRoutingModule {}
