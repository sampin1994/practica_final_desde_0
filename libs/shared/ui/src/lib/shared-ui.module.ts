import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';
import { BoxTemplate } from './templates/box/box.template';
import { CardTemplate } from './templates/card/card.template';
import { TrackDirective } from './directives/track.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { RouterModule } from '@angular/router';
import { CardDetailTemplate } from './templates/card-detail/card-detail.template';
import { ResourceList } from './components/resource-list/resource-list.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    HeaderComponent,
    NotificationComponent,
    BoxTemplate,
    CardTemplate,
    TrackDirective,
    TruncatePipe,
    CardDetailTemplate,
    ResourceList
  ],
  exports: [
    HeaderComponent,
    NotificationComponent,
    BoxTemplate,
    CardTemplate,
    TrackDirective,
    TruncatePipe,
    CardDetailTemplate,
    ResourceList
  ],
})
export class SharedUiModule {}
