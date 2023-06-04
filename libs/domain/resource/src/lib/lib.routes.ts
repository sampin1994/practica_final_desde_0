import { Route } from '@angular/router';
import { ResourcePage } from './resource.page';
import { ResourceResolver } from './resource.resolver';

export const domainResourceRoutes: Route[] = [
  {path: ':id', pathMatch: 'full', component: ResourcePage, resolve:{resource: ResourceResolver}}
];
