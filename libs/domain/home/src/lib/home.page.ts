import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Resource } from './models/resource'
import { Header } from '@ab/ui';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  
  resources$ : Observable<Resource[]> = this.service.getResources$()
  header: Header = {
    heroClass: 'is-primary',
    title: 'Github Repo Searcher Home',
    subtitle: '',
  }

  constructor(private service: HomeService) {
    //this.service.getCategories$().subscribe((categories => (this.categories = categories)))
  }
}
