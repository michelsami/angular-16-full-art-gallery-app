import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtPaintingInterface } from 'src/app/interfaces/art-painting-interface';
import { ArtPaintingsDataService } from 'src/app/services/art-paintings-data.service';

@Component({
  selector: 'app-painting-details',
  templateUrl: './painting-details.component.html',
  styleUrls: ['./painting-details.component.scss']
})
export class PaintingDetailsComponent {

  paintingData !: ArtPaintingInterface; 
  paintingID!: number;
  selectedQuantity = 1;

  constructor(private route: ActivatedRoute, private _artPaintingsData:ArtPaintingsDataService) {}


  // painting = {
  //   title: 'The Starry Night',
  //   description: 'A famous painting by Vincent van Gogh',
  //   price: 199.99,
  //   imageUrl: 'https://rukminim2.flixcart.com/image/416/416/k7ry3680/wallpaper/t/k/5/45-30-flower-nature-wallpaper-m-8-hk-prints-original-imafpy6fqqpnzack.jpeg'
  // };

 

  addToCart(): void {
    // Add the painting to the cart with the selected quantity
    //console.log('Added to cart:', this.painting, 'Quantity:', this.selectedQuantity);
  }





  ngOnInit() {
    this.route.params.subscribe(params => {
      this.paintingID = +params['paintingID'];
      // Fetch card details using the cardId or perform any other necessary actions
    });


    let getPaintingID = this.route.snapshot.params['paintingID'];

 
    this._artPaintingsData.getPaintingByID(getPaintingID.toString()).subscribe(
      {
        next: data => {
            this.paintingData = data;
            console.log("paintingData")
            console.log(this.paintingData)
        },
        error: error => {
            //this.errorMessage = error.message;
            console.log('There was an error!', error);
        }
    }

    );
  }
}
