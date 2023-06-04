import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class AdapterInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      filter((event) => event instanceof HttpResponse),
      map((eventResponse) => eventResponse as HttpResponse<any>),
      map((httpResponse) => this.adaptResponse(httpResponse))
    );
  }

  adaptResponse(httpResponse: HttpResponse<any>) {
    const body = httpResponse.body;
    console.log(body)
    const adaptedBody = body || [];
    const adaptedResponse = httpResponse.clone({ body: adaptedBody });
    return adaptedResponse;
  }
}