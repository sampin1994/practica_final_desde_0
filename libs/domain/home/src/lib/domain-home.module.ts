import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { domainHomeRoutes } from './lib.routes';
import { HomePage } from './home.page';
import { SharedUiModule } from '@ab/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(domainHomeRoutes),
    SharedUiModule,
  ],
  declarations: [HomePage],
})
export class DomainHomeModule {}
