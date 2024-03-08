import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPurchaseItemComponent } from './view-all-purchase-item.component';

describe('ViewAllPurchaseItemComponent', () => {
  let component: ViewAllPurchaseItemComponent;
  let fixture: ComponentFixture<ViewAllPurchaseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllPurchaseItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllPurchaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
