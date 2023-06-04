import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource } from './models/resource';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class CustomSearchService {

  private readonly baseUrl = 'https://api.github.com/search/repositories';

  constructor(private http: HttpClient) {}

  getResources$(newSearch: any) {
    let resourcesUrl = `${this.baseUrl}?q=${encodeURIComponent(newSearch.name)}`;
    
    // Agregar el lenguaje si no está vacío
    if (newSearch.language) {
      resourcesUrl += `+language:${newSearch.language}`;
    }
    
    // Agregar la fecha si existe en el campo de curso
    if (newSearch.course && newSearch.course.date) {
      resourcesUrl += `+pushed:${newSearch.course.date}..2100-01-01`;
    }
    
    // Agregar el número máximo de resultados
    if (newSearch.nResults) {
      resourcesUrl += `&per_page=${newSearch.nResults}`;
    }

    resourcesUrl += '&order=desc';

    //const resourcesUrl = `${this.baseUrl}?q=${encodeURIComponent(newSearch.name)}+language:${newSearch.language}+pushed:${newSearch.course.date}..2100-01-01&per_page=${newSearch.nResults}&order=desc`;

    return this.http.get<apiResources>(resourcesUrl).pipe(map((result) => result.items));
  }
}
type apiResources = {items: Resource[]};