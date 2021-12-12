import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpcLibComponent } from './vpc-lib.component';

describe('VpcLibComponent', () => {
  let component: VpcLibComponent;
  let fixture: ComponentFixture<VpcLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpcLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpcLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
