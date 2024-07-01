import { Component, Input, OnInit } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { DatePipe, NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { TNotification } from '../../../types/data/notification';
import { TAvatar } from '../../../types/data/avatar';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [AvatarComponent, NgClass, NgIf, DatePipe],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent implements OnInit {
  @Input() notification: TNotification | undefined;
  avatar: TAvatar | undefined;

  constructor(private router: Router) {}

  onMessageClick(id: number): void {
    this.notification && this.router.navigateByUrl(`question/${id}`);
  }

  ngOnInit(): void {
    this.avatar = {
      userName: this.notification?.responder || '',
    };
  }
}
