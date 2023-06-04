import { Route } from '@angular/router';
import { CustomSearchPage } from './custom-search.page';
import { AuthGuard } from '@ab/auth';

export const domainCustomSearchRoutes: Route[] = [
  {path: '', pathMatch: 'full', canActivate: [AuthGuard], component: CustomSearchPage}
];
