import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCommentActionComponent } from './product-comment-action.component';

describe('ProductCommentActionComponent', () => {
  let component: ProductCommentActionComponent;
  let fixture: ComponentFixture<ProductCommentActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCommentActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCommentActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
