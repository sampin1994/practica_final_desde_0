import { Route } from '@angular/router';
import { SearchPage } from './search.page';

export const domainSearchRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: SearchPage}
];
