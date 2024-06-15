import { Component } from '@angular/core';
import { MessageComponent } from '../../components/notifications/message/message.component';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
})
export class NotificationsComponent {}
