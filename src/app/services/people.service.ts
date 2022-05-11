import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  BASE_URL = 'http://movie.test/api';

  constructor(private _HttpClient:HttpClient) { }

  getActors():Observable<any>{
    return this._HttpClient.get(`${this.BASE_URL}/actors`);
  }
}
