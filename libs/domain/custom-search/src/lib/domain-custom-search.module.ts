import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { domainCustomSearchRoutes } from './lib.routes';
import { CustomSearchPage } from './custom-search.page';
import { CustomSearchForm } from './custom-search/custom-search.form';
import { SharedUiModule } from '@ab/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedFormModule } from '@ab/form';
import { CourseForm } from './course/course.form';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(domainCustomSearchRoutes),
    SharedUiModule,
    ReactiveFormsModule,
    SharedFormModule,
    
  ],
  declarations: [CustomSearchPage, CustomSearchForm, CourseForm],
})
export class DomainResourceNewModule {}
