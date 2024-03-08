import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOffersAdminComponent } from './view-offers-admin.component';

describe('ViewOffersAdminComponent', () => {
  let component: ViewOffersAdminComponent;
  let fixture: ComponentFixture<ViewOffersAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOffersAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOffersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
