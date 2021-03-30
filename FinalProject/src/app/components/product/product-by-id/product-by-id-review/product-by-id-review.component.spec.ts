import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByIdReviewComponent } from './product-by-id-review.component';

describe('ProductByIdReviewComponent', () => {
  let component: ProductByIdReviewComponent;
  let fixture: ComponentFixture<ProductByIdReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductByIdReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductByIdReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
