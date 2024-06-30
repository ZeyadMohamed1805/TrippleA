import { Component, Input, OnChanges } from '@angular/core';
import { TComment } from '../../../types/data/comment';
import { UserService } from '../../../services/user/user.service';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { DeleteComponent } from '../delete/delete.component';

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

  constructor(
    private readonly userService: UserService,
    private readonly dialog: MatDialog
  ) {}

  ngOnChanges(): void {
    this.comment &&
      this.userService.getUser(this.comment.userId).subscribe({
        next: (response) => (this.userName = response.data.userName),
      });
  }

  onUpdate() {
    this.dialog.open(UpdateComponent, {
      data: this.comment?.id,
    });
  }

  onDelete() {
    this.dialog.open(DeleteComponent, {
      data: this.comment?.id,
    });
  }
}
