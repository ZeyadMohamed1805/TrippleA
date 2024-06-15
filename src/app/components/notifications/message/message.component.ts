import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [AvatarComponent, NgClass, DatePipe],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  @Input({ required: true }) isRead: boolean | undefined;
  date: number = Date.now();
}
