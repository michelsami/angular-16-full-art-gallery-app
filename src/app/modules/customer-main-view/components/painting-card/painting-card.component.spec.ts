import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingCardComponent } from './painting-card.component';

describe('PaintingCardComponent', () => {
  let component: PaintingCardComponent;
  let fixture: ComponentFixture<PaintingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaintingCardComponent]
    });
    fixture = TestBed.createComponent(PaintingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
