import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  constructor(public messageService:MessageService) { }

  ngOnInit(): void {
  }

  close(alert: string) {
    alert = '';
  }

}
