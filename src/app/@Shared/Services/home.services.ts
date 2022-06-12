import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from 'src/app/models/home.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private BaseUrl = environment.baseUrl;


  constructor(private http: HttpClient) { }
  // get method
  getReq(url: string): Observable<Home> {
    return this.http.get<Home>(this.BaseUrl + url);
  }
}

