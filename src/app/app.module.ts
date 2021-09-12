import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from './message/message.component';
import { MessageService } from './service/message.service';
import { NgbdModalContent } from './modal-message/modal-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
