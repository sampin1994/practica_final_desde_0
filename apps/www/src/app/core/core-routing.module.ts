import { AuthGuard } from '@ab/auth';
import { DomainNotFoundModule, domainNotFoundRoutes } from '@ab/not-found';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const notFoundRoute = {
  path:'**',
  redirectTo: 'not-found'
}
const routes: Routes = [
  {
    path: 'shared-auth',
    loadChildren: () => import('@ab/auth').then((m) => m.SharedAuthModule),
  },
  {
    path: 'search',
    loadChildren: () => import('@ab/search').then((m) => m.DomainSearchModule),
  },
  {
    path: 'custom-search',
    canMatch: [AuthGuard],
    loadChildren: () =>
      import('@ab/custom-search').then((m) => m.DomainResourceNewModule),
  },
  {
    path: 'resource',
    loadChildren: () =>
      import('@ab/resource').then((m) => m.DomainResourceModule),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('@ab/not-found').then((m) => m.DomainNotFoundModule),
  },
  {
    path: '',
    loadChildren: () => import('@ab/home').then((m) => m.DomainHomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot([... routes, notFoundRoute])],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
