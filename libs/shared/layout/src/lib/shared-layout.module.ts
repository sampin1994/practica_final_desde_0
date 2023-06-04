import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarWidget } from './navbar/navbar.widget';
import { FooterComponent } from './footer/footer.component';
import { SharedUiModule } from '@ab/ui';


@NgModule({
  imports: [CommonModule, RouterModule, SharedUiModule],
  declarations: [NavbarWidget, FooterComponent],
  exports: [NavbarWidget, FooterComponent],
})
export class SharedLayoutModule {}
 