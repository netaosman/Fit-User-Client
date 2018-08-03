import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LungeTableComponent } from './lunge-table.component';

describe('LungeTableComponent', () => {
  let component: LungeTableComponent;
  let fixture: ComponentFixture<LungeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LungeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LungeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
