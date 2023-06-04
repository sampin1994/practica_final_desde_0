import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Resource } from '../models/resource';

@Component({
  selector: 'ab-resource-view',
  templateUrl: './resource-view.component.html',
  styleUrls: ['./resource-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceViewComponent {
  @Input() resource: Resource = {id:'', name: ''};
  header = {
    heroClass: 'is-danger',
    title: 'Repositorio',
    subtitle: ''
  };
  getCardFrom(resource: Resource) {
    return {
      title: resource.name,
      description: resource.description,
      href: resource.html_url,
      img: resource.avatar_url,
      owner: resource.login,
      owner_url: resource.owner_url
    };
  }
}


