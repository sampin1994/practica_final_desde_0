import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { domainSearchRoutes } from './lib.routes';
import { SearchPage } from './search.page';
import { SharedUiModule } from '@ab/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(domainSearchRoutes),
    SharedUiModule
  ],
  declarations: [SearchPage],
})
export class DomainSearchModule {}
