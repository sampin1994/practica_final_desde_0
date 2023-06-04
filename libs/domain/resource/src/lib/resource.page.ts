import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from './models/resource';
import { Header } from '@ab/ui';

@Component({
  templateUrl: './resource.page.html',
  styleUrls: ['./resource.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourcePage {
  resource: Resource;

  constructor(route: ActivatedRoute) {
    this.resource = route.snapshot.data['resource'];
    console.log(this.resource);

  }

}
