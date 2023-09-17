import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtGalleryPicturesExploreComponent } from './art-gallery-pictures-explore.component';

describe('ArtGalleryPicturesExploreComponent', () => {
  let component: ArtGalleryPicturesExploreComponent;
  let fixture: ComponentFixture<ArtGalleryPicturesExploreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtGalleryPicturesExploreComponent]
    });
    fixture = TestBed.createComponent(ArtGalleryPicturesExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
