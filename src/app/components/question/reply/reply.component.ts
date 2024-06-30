import { Component, Input, OnChanges } from '@angular/core';
import { TComment } from '../../../types/data/comment';
import { UserService } from '../../../services/user/user.service';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reply',
  standalone: true,
  imports: [AvatarComponent, MatMenuModule, MatIconModule, MatButtonModule],
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

  onUpdate() {}

  onDelete() {}
}
