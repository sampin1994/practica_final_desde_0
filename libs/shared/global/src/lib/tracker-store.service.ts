import { Injectable } from '@angular/core';
import { Store } from './store';
import { TrackerEntry } from './models/tracker-entry';
import { Action } from './models/action';
import { filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TrackerStoreService {
  private store = new Store<TrackerEntry>({
    category: 'SYSTEM',
    event: 'TRACKER_INIT',
    label: 'Angular.Builders'
  });
  constructor() { }

  trackerEntry(entry: TrackerEntry){
    const action: Action = {
      type: 'TRACK_' + entry.category,
      payload: entry
    }
    this.store.dispatch(action)
  }

  selectByEvent$(event:string){
    const byEvent = (state: TrackerEntry) => state.event == event;
    return this.store.getState$().pipe(filter(byEvent));
  }

  selectAnyErrors$(){
    const byErrorCategory = (state: TrackerEntry) => state.category == 'ERROR';
    return this.store.getState$().pipe(filter(byErrorCategory));
  }

  selectActions$(){
    return this.store.getActions$();
  }


}
