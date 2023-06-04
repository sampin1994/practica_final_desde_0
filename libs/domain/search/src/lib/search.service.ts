import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Resource } from './models/resource';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly baseUrl = 'https://api.github.com/search/repositories';
  private readonly perPage = 20;
  private readonly order = 'desc';

  constructor(private http: HttpClient) {}

  getResourceByQuery$(query: string) {
    const apiUrl = `${this.baseUrl}?q=${encodeURIComponent(query)}+in:name&per_page=${this.perPage}&order=${this.order}`;
    return this.http.get<any>(apiUrl).pipe(
      map((resources) => resources.items),
      map((resources: Resource[]) => resources.filter((r) => this.matchesQuery(r, query)))
    );
  }
  private matchesQuery(resource: Resource, query: string) {
    if (!query) return false;
    const cleanQuery = query.toLowerCase().trim();
    if (cleanQuery.length === 0) return false;
    if (resource.name?.toLowerCase().includes(cleanQuery)) return true;
    if (resource.description?.toLowerCase().includes(cleanQuery)) return true;
    return false;
  }
}