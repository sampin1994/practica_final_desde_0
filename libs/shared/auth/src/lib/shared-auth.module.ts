import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sharedAuthRoutes } from './lib.routes';
import { AuthWidget } from './auth.widget';
import { LoginPage } from './login.page';
import { LoginForm } from './login/login.form';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sharedAuthRoutes),
    RouterModule.forChild(sharedAuthRoutes),
  ],
  declarations: [AuthWidget, LoginPage, LoginForm],
  exports: [AuthWidget],
})
export class SharedAuthModule {}
