import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TComment } from '../../../types/data/comment';
import { UserService } from '../../../services/user/user.service';
import { AvatarComponent } from '../../common/avatar/avatar.component';

@Component({
  selector: 'app-reply',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './reply.component.html',
  styleUrl: './reply.component.scss',
})
export class ReplyComponent implements OnChanges {
  @Input() comment: TComment | undefined;
  userName: string | undefined;

  constructor(private readonly userService: UserService) {}

  ngOnChanges(): void {
    this.comment &&
      this.userService.getUser(this.comment.userId).subscribe({
        next: (response) => (this.userName = response.data.userName),
      });
  }
}
