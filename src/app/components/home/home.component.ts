import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: any;
  trendingMoviesList: any = [];
  trendingTvShowList: any = [];
  trendingPersonsList: any = [];
  isLoading:boolean = true;


  imgPrefix: string = "http://sima.test/";

  constructor(private _MoviesService: MoviesService){}

  ngOnInit(): void {
    this._MoviesService.getMovies().subscribe((response) => {


      for(let i=0 ; i< response.data.length ; i++){
        if(i < 10){
          this.trendingMoviesList.push(response.data[i]);

        }
      }

    })



    this._MoviesService.getTvShows().subscribe((response) => {


      for(let i=0 ; i< response.data.length ; i++){
        if(i < 10){
          this.trendingTvShowList.push(response.data[i]);

        }
      }

    })

   setTimeout(() => {
    this.isLoading = false;
   }, 1000);

  }

  showMovieID(movieId:string){
    console.log(movieId);

  }




}
