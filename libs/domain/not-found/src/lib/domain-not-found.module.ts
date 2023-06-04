import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { domainNotFoundRoutes } from './lib.routes';
import { NotFoundPage } from './not-found.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(domainNotFoundRoutes),
    RouterModule.forChild(domainNotFoundRoutes),
  ],
  declarations: [NotFoundPage],
})
export class DomainNotFoundModule {}
