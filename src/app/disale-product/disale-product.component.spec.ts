import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisaleProductComponent } from './disale-product.component';

describe('DisaleProductComponent', () => {
  let component: DisaleProductComponent;
  let fixture: ComponentFixture<DisaleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisaleProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisaleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
