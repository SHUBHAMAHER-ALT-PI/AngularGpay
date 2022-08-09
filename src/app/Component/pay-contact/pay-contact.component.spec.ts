import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayContactComponent } from './pay-contact.component';

describe('PayContactComponent', () => {
  let component: PayContactComponent;
  let fixture: ComponentFixture<PayContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
