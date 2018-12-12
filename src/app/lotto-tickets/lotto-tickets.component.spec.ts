import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoTicketsComponent } from './lotto-tickets.component';

describe('LottoTicketsComponent', () => {
  let component: LottoTicketsComponent;
  let fixture: ComponentFixture<LottoTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
