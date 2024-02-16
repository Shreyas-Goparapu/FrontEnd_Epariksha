import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuizzesByCategoryComponent } from './view-quizzes-by-category.component';

describe('ViewQuizzesByCategoryComponent', () => {
  let component: ViewQuizzesByCategoryComponent;
  let fixture: ComponentFixture<ViewQuizzesByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewQuizzesByCategoryComponent]
    });
    fixture = TestBed.createComponent(ViewQuizzesByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
