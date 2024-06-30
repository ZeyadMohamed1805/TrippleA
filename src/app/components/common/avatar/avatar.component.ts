import { DatePipe, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TAvatar } from '../../../types/data/avatar';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [DatePipe, NgIf, NgStyle],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input() data: TAvatar | undefined;
  @Input() size: number | undefined;
}
