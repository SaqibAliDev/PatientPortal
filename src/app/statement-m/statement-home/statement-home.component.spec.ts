import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementHomeComponent } from './statement-home.component';

describe('StatementHomeComponent', () => {
  let component: StatementHomeComponent;
  let fixture: ComponentFixture<StatementHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatementHomeComponent]
    });
    fixture = TestBed.createComponent(StatementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
