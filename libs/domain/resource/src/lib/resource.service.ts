import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Resource } from './models/resource';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  private readonly resourcesUrl = 'https://api.github.com/repositories';

  constructor(private http: HttpClient) {}

  getResourceById$(resourceId: string) {
    return this.http
      .get<any>(`${this.resourcesUrl}/${resourceId}`)
      .pipe(map((result) => ({
        avatar_url: result.owner.avatar_url,
        id: result.id,
        login: result.owner.login,
        name: result.name,
        description: result.description,
        html_url: result.html_url,
        owner_url: result.owner.html_url
        // Filtrar subpropiedades dentro de result si es necesario
      })));
  }
}
