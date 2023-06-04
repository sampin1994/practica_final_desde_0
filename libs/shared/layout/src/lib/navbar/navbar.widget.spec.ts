import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarWidget } from './navbar.widget';

describe('NavbarWidget', () => {
  let component: NavbarWidget;
  let fixture: ComponentFixture<NavbarWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
