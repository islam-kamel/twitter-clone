import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartYearComponent } from './bar-chart-year.component';

describe('BarChartYearComponent', () => {
  let component: BarChartYearComponent;
  let fixture: ComponentFixture<BarChartYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
