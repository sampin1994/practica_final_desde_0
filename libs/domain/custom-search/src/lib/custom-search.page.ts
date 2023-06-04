import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from './models/resource';
import { CustomSearchService } from './custom-search.service';

@Component({
  templateUrl: './custom-search.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSearchPage {
  header = {
    heroClass: 'is-warning',
    title: 'Custom Search',
    subtitle: '',
  };
  resources$!: Observable<Resource[]>;
  constructor(private service: CustomSearchService) {}

  onSend(newResource: Resource) {
    this.resources$ = this.service.getResources$(newResource)
    console.log(this.resources$);
  }
}