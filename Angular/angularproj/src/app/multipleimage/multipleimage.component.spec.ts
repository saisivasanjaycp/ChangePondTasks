import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleimageComponent } from './multipleimage.component';

describe('MultipleimageComponent', () => {
  let component: MultipleimageComponent;
  let fixture: ComponentFixture<MultipleimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleimageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
