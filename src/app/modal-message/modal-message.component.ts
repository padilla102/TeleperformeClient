import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Message } from '../model/message';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class NgbdModalContent {
  @Input() message!: Message;

  constructor(public activeModal: NgbActiveModal) {}
}
