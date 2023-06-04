import { Route } from '@angular/router';
import { HomePage } from './home.page';

export const domainHomeRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: HomePage}
];
