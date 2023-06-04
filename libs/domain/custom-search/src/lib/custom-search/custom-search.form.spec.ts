import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomSearchForm } from './custom-search.form';

describe('CustomSearchForm', () => {
  let component: CustomSearchForm;
  let fixture: ComponentFixture<CustomSearchForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomSearchForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSearchForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
