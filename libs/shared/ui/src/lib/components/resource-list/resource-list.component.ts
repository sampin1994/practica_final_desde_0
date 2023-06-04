import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Resource } from '../../models/resource';

@Component({
  selector: 'ab-ui-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceList {
  @Input() resources: Resource[] = [];
  header = {
    heroClass: 'is-black',
    title: 'Github Repositories',
    subtitle: 'Click on upper right button ("Custom Search") to find repositories',
  };
  getCardFrom(resource: Resource) {
    return {
      title: resource.name,
      description: resource.description,
      link: '/resource/' + resource.id,
    };
  }
}
