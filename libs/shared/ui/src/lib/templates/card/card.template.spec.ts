import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardTemplate } from './card.template';

describe('CardTemplate', () => {
  let component: CardTemplate;
  let fixture: ComponentFixture<CardTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(CardTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
