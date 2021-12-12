import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLibComponent } from './dashboard-lib.component';

describe('DashboardLibComponent', () => {
  let component: DashboardLibComponent;
  let fixture: ComponentFixture<DashboardLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
