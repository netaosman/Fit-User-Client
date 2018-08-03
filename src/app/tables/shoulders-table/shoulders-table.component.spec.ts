import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouldersTableComponent } from './shoulders-table.component';

describe('ShouldersTableComponent', () => {
  let component: ShouldersTableComponent;
  let fixture: ComponentFixture<ShouldersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShouldersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouldersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
