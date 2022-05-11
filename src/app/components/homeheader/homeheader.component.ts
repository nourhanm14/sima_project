import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';




@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss']
})
export class HomeheaderComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }

  trendingMovies:any[] = []

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    margin:5,
    dots: false,
    navSpeed: 100,
    nav:false,
    autoHeight: true,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },

  }


  



  imgPrefix: string = "http://movie.test/";


 ngOnInit(): void {


   this._MoviesService.getMovies().subscribe((response)=>{
    
    for(let i=0 ; i< response.data.length ; i++){
      if(i < 10){
        this.trendingMovies.push(response.data[i]);
        
      }
    }

   })
}


}
