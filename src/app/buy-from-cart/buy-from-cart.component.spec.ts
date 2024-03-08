import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFromCartComponent } from './buy-from-cart.component';

describe('BuyFromCartComponent', () => {
  let component: BuyFromCartComponent;
  let fixture: ComponentFixture<BuyFromCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyFromCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyFromCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
