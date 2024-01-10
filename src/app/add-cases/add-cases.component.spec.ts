import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCasesComponent } from './add-cases.component';

describe('AddCasesComponent', () => {
  let component: AddCasesComponent;
  let fixture: ComponentFixture<AddCasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCasesComponent]
    });
    fixture = TestBed.createComponent(AddCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
