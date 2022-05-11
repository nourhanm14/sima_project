import { MoviesService } from '../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss']
})
export class MediaDetailsComponent implements OnInit {

  mediaType: string = '';
  movieID: string = '';
  movieDetails: any = {};
  tvDetails: any = {};
  tvID:string = '';
  imgPrefix: string = "https://alkifaah.com/storage/";

  mediaGenres: any[] = [];
  isLoading:boolean = true



  constructor(private _MoviesService: MoviesService, private _ActivatedRoute: ActivatedRoute) {
   }



  ngOnInit(): void {
    this.mediaType = this._ActivatedRoute.snapshot.params.type;

    if (this.mediaType == "movie") {
      this.movieID = this._ActivatedRoute.snapshot.params.id;
      this._MoviesService.getMovieById(this.movieID).subscribe((response) => {
        console.log(response);

        this.movieDetails = response.data.movie;
        this.mediaGenres = response.data.genres;
      })
    } else {
      this.tvID = this._ActivatedRoute.snapshot.params.id;
      this._MoviesService.getTvShowById(this.tvID).subscribe((response) => {
        this.tvDetails = response.data;
      })
    }

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

}
