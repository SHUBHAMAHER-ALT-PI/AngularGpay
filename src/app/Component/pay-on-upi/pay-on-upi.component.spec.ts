import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOnUPIComponent } from './pay-on-upi.component';

describe('PayOnUPIComponent', () => {
  let component: PayOnUPIComponent;
  let fixture: ComponentFixture<PayOnUPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayOnUPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayOnUPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
