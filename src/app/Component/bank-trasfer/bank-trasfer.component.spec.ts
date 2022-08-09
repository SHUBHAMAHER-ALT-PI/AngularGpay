import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankTrasferComponent } from './bank-trasfer.component';

describe('BankTrasferComponent', () => {
  let component: BankTrasferComponent;
  let fixture: ComponentFixture<BankTrasferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankTrasferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankTrasferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
