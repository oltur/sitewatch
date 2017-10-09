import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatedAttributesListComponent } from './calculated-attributes-list.component';

describe('CalculatedAttributesListComponent', () => {
  let component: CalculatedAttributesListComponent;
  let fixture: ComponentFixture<CalculatedAttributesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatedAttributesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatedAttributesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
