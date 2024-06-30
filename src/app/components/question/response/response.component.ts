import { Component, Input, OnChanges } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { CommentComponent } from '../comment/comment.component';
import { TAnswer } from '../../../types/data/answer';
import { NgStyle } from '@angular/common';
import { UserService } from '../../../services/user/user.service';
import { VoteService } from '../../../services/vote/vote.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-response',
  standalone: true,
  imports: [AvatarComponent, CommentComponent, MatIcon, NgStyle],
  templateUrl: './response.component.html',
  styleUrl: './response.component.scss',
  providers: [VoteService],
})
export class ResponseComponent implements OnChanges {
  actions: string[] = ['Upvote', 'Comment', 'Downvote'];
  icons: string[] = ['thumb_up', 'comment', 'thumb_down'];
  @Input() answer: TAnswer | undefined;
  userName: string | undefined;

  constructor(
    private readonly userService: UserService,
    public voteService: VoteService
  ) {}

  ngOnChanges(): void {
    this.answer &&
      this.userService.getUser(this.answer.userId).subscribe({
        next: (response) => (this.userName = response.data.userName),
      });
  }
}
