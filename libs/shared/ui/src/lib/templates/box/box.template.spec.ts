import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoxTemplate } from './box.template';

describe('BoxTemplate', () => {
  let component: BoxTemplate;
  let fixture: ComponentFixture<BoxTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(BoxTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
