import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CoreModule } from './core/core.module';
import { SharedLayoutModule } from '@ab/layout';
import { DomainSearchBoxModule } from '@ab/search-box';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    SharedLayoutModule,
    DomainSearchBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
