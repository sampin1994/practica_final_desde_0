import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceViewComponent } from './resource-view.component';

describe('ResourceViewComponent', () => {
  let component: ResourceViewComponent;
  let fixture: ComponentFixture<ResourceViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceViewComponent]
    });
    fixture = TestBed.createComponent(ResourceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
