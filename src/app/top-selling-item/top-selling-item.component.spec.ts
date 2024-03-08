import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellingItemComponent } from './top-selling-item.component';

describe('TopSellingItemComponent', () => {
  let component: TopSellingItemComponent;
  let fixture: ComponentFixture<TopSellingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSellingItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSellingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
