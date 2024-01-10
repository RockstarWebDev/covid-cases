import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCasesComponent } from './edit-cases.component';

describe('EditCasesComponent', () => {
  let component: EditCasesComponent;
  let fixture: ComponentFixture<EditCasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCasesComponent]
    });
    fixture = TestBed.createComponent(EditCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
