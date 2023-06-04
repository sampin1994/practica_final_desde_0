import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceList } from './resource-list.component';

describe('ResourceListComponent', () => {
  let component: ResourceList;
  let fixture: ComponentFixture<ResourceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourceList],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
