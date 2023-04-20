import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastFoodCentreComponent } from './fast-food-centre.component';

describe('FastFoodCentreComponent', () => {
  let component: FastFoodCentreComponent;
  let fixture: ComponentFixture<FastFoodCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastFoodCentreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastFoodCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
