import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoTicketFormComponent } from './lotto-ticket-form.component';

describe('LottoTicketFormComponent', () => {
  let component: LottoTicketFormComponent;
  let fixture: ComponentFixture<LottoTicketFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoTicketFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
