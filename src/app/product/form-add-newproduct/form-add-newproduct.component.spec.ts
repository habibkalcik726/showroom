import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddNewproductComponent } from './form-add-newproduct.component';

describe('FormAddNewproductComponent', () => {
  let component: FormAddNewproductComponent;
  let fixture: ComponentFixture<FormAddNewproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddNewproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddNewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
