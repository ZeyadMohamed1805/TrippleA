import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageComponent } from '../../components/notifications/message/message.component';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
})
export class NotificationsComponent implements OnInit, OnDestroy {
  constructor(public notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.connect();
    this.notificationService.receiveNotifications();
    this.notificationService.patchNotifications();
  }

  ngOnDestroy(): void {
    this.notificationService.getNotifications();
  }
}
