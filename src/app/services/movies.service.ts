import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  BASE_URL = 'https://alkifaah.com/api';

  constructor(private _HttpClient:HttpClient) { }

  getMovies():Observable<any>{
    return this._HttpClient.get(`${this.BASE_URL}/movies`);
  }

  getTvShows():Observable<any>{
    return this._HttpClient.get(`${this.BASE_URL}/tv-shows`);
  }


  getMovieById(id:string):Observable<any>{
    return this._HttpClient.get(`${this.BASE_URL}/movie/${id}`)
  }

  getTvShowById(id:string):Observable<any>{
    return this._HttpClient.get(`${this.BASE_URL}/tv-show/${id}`)
  }
}
