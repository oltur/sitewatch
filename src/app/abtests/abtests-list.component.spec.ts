import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABTestsListComponent } from './abtests-list.component';

describe('ABTestsListComponent', () => {
  let component: ABTestsListComponent;
  let fixture: ComponentFixture<ABTestsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABTestsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABTestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
