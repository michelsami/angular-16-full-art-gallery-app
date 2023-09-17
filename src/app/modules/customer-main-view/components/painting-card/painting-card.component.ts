import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ArtPaintingInterface } from 'src/app/interfaces/art-painting-interface';

@Component({
  selector: 'app-painting-card',
  templateUrl: './painting-card.component.html',
  styleUrls: ['./painting-card.component.scss']
})
export class PaintingCardComponent {

  constructor(private router: Router){}

  @Input() paintings!:ArtPaintingInterface[];


  openPaintingDetails(paintingID: string){
    console.log("heeeeeeeeeeeeeeeereeeeeeee")
    console.log(paintingID);
    this.router.navigate(['/painting-details', paintingID]);
  }

  // paintings = [
  //   {
  //     title: 'The Starry Night',
  //     description: 'A famous painting by Vincent van Gogh',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/poster/s/7/y/abstract-modern-art-canvas-painting-ip2037-24x16-medium-original-imae794b4tkzgken.jpeg'
  //   },
  //   {
  //     title: 'Mona Lisa',
  //     description: 'A renowned portrait by Leonardo da Vinci',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/k6wiefk0/poster/7/g/x/extra-large-beautiful-nature-waterfall-vastu-painting-poster-original-imafp98z5ea3qewr.jpeg'
  //   },
  //   {
  //     title: 'The Starry Night',
  //     description: 'A famous painting by Vincent van Gogh',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/poster/s/7/y/abstract-modern-art-canvas-painting-ip2037-24x16-medium-original-imae794b4tkzgken.jpeg'
  //   },
  //   {
  //     title: 'Mona Lisa',
  //     description: 'A renowned portrait by Leonardo da Vinci',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/k6wiefk0/poster/7/g/x/extra-large-beautiful-nature-waterfall-vastu-painting-poster-original-imafp98z5ea3qewr.jpeg'
  //   },
  //   {
  //     title: 'The Starry Night',
  //     description: 'A famous painting by Vincent van Gogh',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/poster/s/7/y/abstract-modern-art-canvas-painting-ip2037-24x16-medium-original-imae794b4tkzgken.jpeg'
  //   },
  //   {
  //     title: 'Mona Lisa',
  //     description: 'A renowned portrait by Leonardo da Vinci',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/k6wiefk0/poster/7/g/x/extra-large-beautiful-nature-waterfall-vastu-painting-poster-original-imafp98z5ea3qewr.jpeg'
  //   },
  //   {
  //     title: 'The Starry Night',
  //     description: 'A famous painting by Vincent van Gogh',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/poster/s/7/y/abstract-modern-art-canvas-painting-ip2037-24x16-medium-original-imae794b4tkzgken.jpeg'
  //   },
  //   {
  //     title: 'Mona Lisa',
  //     description: 'A renowned portrait by Leonardo da Vinci',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/k6wiefk0/poster/7/g/x/extra-large-beautiful-nature-waterfall-vastu-painting-poster-original-imafp98z5ea3qewr.jpeg'
  //   },
  //   {
  //     title: 'The Starry Night',
  //     description: 'A famous painting by Vincent van Gogh',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/poster/s/7/y/abstract-modern-art-canvas-painting-ip2037-24x16-medium-original-imae794b4tkzgken.jpeg'
  //   },
  //   {
  //     title: 'Mona Lisa',
  //     description: 'A renowned portrait by Leonardo da Vinci',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/k6wiefk0/poster/7/g/x/extra-large-beautiful-nature-waterfall-vastu-painting-poster-original-imafp98z5ea3qewr.jpeg'
  //   },
  //   {
  //     title: 'The Starry Night',
  //     description: 'A famous painting by Vincent van Gogh',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/poster/s/7/y/abstract-modern-art-canvas-painting-ip2037-24x16-medium-original-imae794b4tkzgken.jpeg'
  //   },
  //   {
  //     title: 'Mona Lisa',
  //     description: 'A renowned portrait by Leonardo da Vinci',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/k6wiefk0/poster/7/g/x/extra-large-beautiful-nature-waterfall-vastu-painting-poster-original-imafp98z5ea3qewr.jpeg'
  //   },
  //   {
  //     title: 'The Starry Night',
  //     description: 'A famous painting by Vincent van Gogh',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/poster/s/7/y/abstract-modern-art-canvas-painting-ip2037-24x16-medium-original-imae794b4tkzgken.jpeg'
  //   },
  //   {
  //     title: 'Mona Lisa',
  //     description: 'A renowned portrait by Leonardo da Vinci',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/k6wiefk0/poster/7/g/x/extra-large-beautiful-nature-waterfall-vastu-painting-poster-original-imafp98z5ea3qewr.jpeg'
  //   },
  //   {
  //     title: 'The Starry Night',
  //     description: 'A famous painting by Vincent van Gogh',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/poster/s/7/y/abstract-modern-art-canvas-painting-ip2037-24x16-medium-original-imae794b4tkzgken.jpeg'
  //   },
  //   {
  //     title: 'Mona Lisa',
  //     description: 'A renowned portrait by Leonardo da Vinci',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/k6wiefk0/poster/7/g/x/extra-large-beautiful-nature-waterfall-vastu-painting-poster-original-imafp98z5ea3qewr.jpeg'
  //   },
  //   {
  //     title: 'The Starry Night',
  //     description: 'A famous painting by Vincent van Gogh',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/poster/s/7/y/abstract-modern-art-canvas-painting-ip2037-24x16-medium-original-imae794b4tkzgken.jpeg'
  //   },
  //   {
  //     title: 'Mona Lisa',
  //     description: 'A renowned portrait by Leonardo da Vinci',
  //     imageUrl: 'https://rukminim2.flixcart.com/image/416/416/k6wiefk0/poster/7/g/x/extra-large-beautiful-nature-waterfall-vastu-painting-poster-original-imafp98z5ea3qewr.jpeg'
  //   },
  //   // Add more paintings here
  // ];
}
