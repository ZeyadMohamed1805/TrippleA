import { Component, Input, OnChanges } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { CommentComponent } from '../comment/comment.component';
import { TAnswer } from '../../../types/data/answer';
import { NgStyle } from '@angular/common';
import { UserService } from '../../../services/user/user.service';
import { VoteService } from '../../../services/vote/vote.service';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../common/modal/modal.component';

@Component({
  selector: 'app-response',
  standalone: true,
  imports: [AvatarComponent, CommentComponent, MatIcon, NgStyle],
  templateUrl: './response.component.html',
  styleUrl: './response.component.scss',
  providers: [VoteService],
})
export class ResponseComponent implements OnChanges {
  actions: string[] = ['Upvote', 'Downvote'];
  icons: string[] = ['thumb_up', 'thumb_down'];
  @Input() answer: TAnswer | undefined;
  userName: string | undefined;

  constructor(
    private readonly userService: UserService,
    public voteService: VoteService,
    private readonly dialog: MatDialog
  ) {}

  ngOnChanges(): void {
    if (this.answer) {
      this.voteService.votes = this.answer?.votes || 0;
      this.userService.getUser(this.answer.userId).subscribe({
        next: (response) => (this.userName = response.data.userName),
      });
    }
  }

  onExpand(image: string) {
    this.dialog.open(ModalComponent, {
      data: {
        image: image,
      },
    });
  }
}
