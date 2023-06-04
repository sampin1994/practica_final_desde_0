import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { Notification } from '../../models/notification';

@Component({
  selector: 'ab-ui-notification',
  templateUrl: './notification.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent{
  @Input() notification: Notification = { class: '', message: '' };

  show$ = new BehaviorSubject<boolean>(false);

  constructor() {}
  ngOnInit(): void {
    if (this.notification.class=='') {
      this.onClose()
      // La notificación no está vacía, puedes realizar las acciones necesarias
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.show$.next(true);
    timer(4000).subscribe(() => this.onClose());
  }

  onClose() {
    console.log('closing');
    this.show$.next(false);
  }
}