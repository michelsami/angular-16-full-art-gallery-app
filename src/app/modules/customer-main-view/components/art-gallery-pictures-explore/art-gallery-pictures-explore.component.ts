import { Component } from '@angular/core';
import { ArtPaintingInterface } from 'src/app/interfaces/art-painting-interface';
import { ArtPaintingsDataService } from 'src/app/services/art-paintings-data.service';

@Component({
  selector: 'app-art-gallery-pictures-explore',
  templateUrl: './art-gallery-pictures-explore.component.html',
  styleUrls: ['./art-gallery-pictures-explore.component.scss']
})
export class ArtGalleryPicturesExploreComponent {
  artPaintingsData : ArtPaintingInterface[] = []; 
  errorMessage: string = '';
  constructor(private _artPaintingsData:ArtPaintingsDataService){
    // this._artPaintingsData.artPaintingsData.subscribe(
    //   {next: (data: ArtPaintingInterface[]) => this.artPaintingsData = data}
    // );
  }

  ngOnInit() {
    this._artPaintingsData.getAllPaintings().subscribe(
      {
        next: data => {
            this.artPaintingsData = data;
        },
        error: error => {
            this.errorMessage = error.message;
            //console.error('There was an error!', error);
        }
    }

    );
  }



}
