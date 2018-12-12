import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoBallsComponent } from './lotto-balls.component';

describe('LottoBallsComponent', () => {
  let component: LottoBallsComponent;
  let fixture: ComponentFixture<LottoBallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoBallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
