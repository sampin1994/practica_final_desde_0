import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardDetail } from '../../models/card-detail';

@Component({
  selector: 'ab-ui-card-detail',
  templateUrl: './card-detail.template.html',
  styleUrls: ['./card-detail.template.css']
})
export class CardDetailTemplate {
  @Input() card: CardDetail = { title: '', description: '' };
}

