import { MoviesService } from './../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class  MoviesComponent implements OnInit{

  moviesList: any = [];
  isLoading: boolean = false;
  imgPrefix: string = "https://alkifaah.com/storage/";





  constructor(public _MoviesService: MoviesService, public _ActivatedRoute: ActivatedRoute, private _Router: Router) { }





  ngOnInit(): void {
   this.getMovies()
  }


  getMovies() {

    this.isLoading = true;


    this._MoviesService.getMovies().subscribe((response) => {


      this.moviesList = response.data;




    }, () => {
      this._Router.navigate(['notfound']);
    })

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);



  }










}

