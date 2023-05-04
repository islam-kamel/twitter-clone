import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartMonthComponent } from './bar-chart-month.component';

describe('BarChartMonthComponent', () => {
  let component: BarChartMonthComponent;
  let fixture: ComponentFixture<BarChartMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
