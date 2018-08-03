
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavsComponent } from './user-navs.component';

describe('UserNavsComponent', () => {
  let component: UserNavsComponent;
  let fixture: ComponentFixture<UserNavsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNavsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
