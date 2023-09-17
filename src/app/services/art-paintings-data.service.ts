import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable} from 'rxjs';
import { ArtPaintingInterface } from '../interfaces/art-painting-interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArtPaintingsDataService {


//   artPaintingsData = new BehaviorSubject<ArtPaintingInterface[]>(
//     [
//       {
//         name: "New Art Painting 5",
//       description: "Amazing Painting by Van Gogh",
//       price: 1234,
//       stock: "4",
//       image: "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
//       category: "Van Gogh Paintings 6"
// },
// {
//   name: "New Art Painting 5",
// description: "Amazing Painting by Van Gogh",
// price: 1234,
// stock: "4",
// image: "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
// category: "Van Gogh Paintings 6"
// },
// {
//   name: "New Art Painting 5",
// description: "Amazing Painting by Van Gogh",
// price: 1234,
// stock: "4",
// image: "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
// category: "Van Gogh Paintings 6"
// }
//     ]
//   );

  constructor(private http: HttpClient) {}

 
  getAllPaintings(): Observable<any> {
    const url = 'http://localhost:5000/products'; 

    // console.log(this.http.get<any>(url).subscribe(
    //   {
    //     next: data => {
    //        console.log(data);
    //     },
    //     error: error => {
           
    //         console.log('There was an error!', error);
    //     }
    // }
    // ));

    return this.http.get<any>(url);
  }

  
  getPaintingByID(paintingID: string): Observable<any> {
    let url = 'http://localhost:5000/products'; 

   url = url +"/"+ paintingID;
   console.log(`url = ${url}`)

    return this.http.get<any>(url);
  }
  
}
