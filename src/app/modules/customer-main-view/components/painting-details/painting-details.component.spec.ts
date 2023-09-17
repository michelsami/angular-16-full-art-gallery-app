import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingDetailsComponent } from './painting-details.component';

describe('PaintingDetailsComponent', () => {
  let component: PaintingDetailsComponent;
  let fixture: ComponentFixture<PaintingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaintingDetailsComponent]
    });
    fixture = TestBed.createComponent(PaintingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
