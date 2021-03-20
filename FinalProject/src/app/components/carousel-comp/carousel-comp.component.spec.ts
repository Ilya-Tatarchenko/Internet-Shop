import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCompComponent } from './carousel-comp.component';

describe('CarouselCompComponent', () => {
  let component: CarouselCompComponent;
  let fixture: ComponentFixture<CarouselCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
