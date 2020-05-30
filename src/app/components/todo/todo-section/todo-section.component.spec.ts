import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSectionComponent } from './todo-section.component';

describe('TodoSectionComponent', () => {
  let component: TodoSectionComponent;
  let fixture: ComponentFixture<TodoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
