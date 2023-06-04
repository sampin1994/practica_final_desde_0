import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailTemplate } from './card-detail.template';

describe('CardDetailTemplate', () => {
  let component: CardDetailTemplate;
  let fixture: ComponentFixture<CardDetailTemplate>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDetailTemplate]
    });
    fixture = TestBed.createComponent(CardDetailTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
