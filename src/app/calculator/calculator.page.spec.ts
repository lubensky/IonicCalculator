import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorPage } from './calculator.page';

describe('CalculatorPage', () => {
  let component: CalculatorPage;
  let fixture: ComponentFixture<CalculatorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
