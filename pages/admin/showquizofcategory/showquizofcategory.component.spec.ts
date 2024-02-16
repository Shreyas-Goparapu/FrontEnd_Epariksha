import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowquizofcategoryComponent } from './showquizofcategory.component';

describe('ShowquizofcategoryComponent', () => {
  let component: ShowquizofcategoryComponent;
  let fixture: ComponentFixture<ShowquizofcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowquizofcategoryComponent]
    });
    fixture = TestBed.createComponent(ShowquizofcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
