import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestTableComponent } from './chest-table.component';

describe('ChestTableComponent', () => {
  let component: ChestTableComponent;
  let fixture: ComponentFixture<ChestTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChestTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
