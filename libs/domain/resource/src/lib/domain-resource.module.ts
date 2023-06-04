import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { domainResourceRoutes } from './lib.routes';
import { ResourcePage } from './resource.page';
import { SharedUiModule } from '@ab/ui';
import { ResourceViewComponent } from './resource-view/resource-view.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(domainResourceRoutes),
    SharedUiModule
  ],
  declarations: [ResourcePage, ResourceViewComponent],
})
export class DomainResourceModule {}
