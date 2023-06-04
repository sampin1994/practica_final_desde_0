import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Resource } from './models/resource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly resourcesUrl = 'https://api.github.com/search/repositories?q=angular&per_page=20&order=desc';

  constructor(private http: HttpClient) {}

  getResources$(): Observable<Resource[]> {
    return this.http
      .get<apiResources>(this.resourcesUrl)
      .pipe(map((apiResponse) => apiResponse.items));
  }
}
type apiResources = {items: Resource[]};