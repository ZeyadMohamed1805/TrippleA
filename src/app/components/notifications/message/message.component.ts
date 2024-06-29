import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { DatePipe, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { TNotification } from '../../../types/data/notification';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [AvatarComponent, NgClass, DatePipe],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  @Input() notification: TNotification | undefined;

  constructor(private router: Router) {}

  onMessageClick(): void {
    this.router.navigateByUrl(`question/${this.notification?.id}`);
  }
}
