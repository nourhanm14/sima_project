import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
declare let $:any;

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  
  tvShowsList:any[] = [];
  isLoading: boolean = false;
  imgPrefix: string = "http://movie.test/";

  

 
  

  constructor(public _MoviesService: MoviesService, public _ActivatedRoute: ActivatedRoute, private _Router: Router) { }

  getTvShows() {

    this.isLoading = true;

    this._MoviesService.getTvShows().subscribe((response) => {


      this.tvShowsList = response.data;
      


    }, () => {
      this._Router.navigate(['notfound']);
    })

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);



  }



  ngOnInit(): void {
    this.getTvShows()  
  }

}
