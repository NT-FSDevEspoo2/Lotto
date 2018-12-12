import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LottoBallsComponent } from './lotto-balls/lotto-balls.component';
import { LottoBallComponent } from './lotto-balls/lotto-ball/lotto-ball.component';
import { LottoTicketsComponent } from './lotto-tickets/lotto-tickets.component';
import { LottoTicketComponent } from './lotto-tickets/lotto-ticket/lotto-ticket.component';
import { LottoTicketFormComponent } from './lotto-tickets/lotto-ticket-form/lotto-ticket-form.component';

@NgModule({
    declarations: [
        AppComponent,
        LottoBallsComponent,
        LottoBallComponent,
        LottoTicketsComponent,
        LottoTicketComponent,
        LottoTicketFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
