import { Component, Input, OnChanges } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { CommentComponent } from '../comment/comment.component';
import { TAnswer } from '../../../types/data/answer';
import { NgStyle } from '@angular/common';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-response',
  standalone: true,
  imports: [AvatarComponent, CommentComponent, NgStyle],
  templateUrl: './response.component.html',
  styleUrl: './response.component.scss',
})
export class ResponseComponent implements OnChanges {
  actions: string[] = ['Upvote', 'Comment', 'Downvote'];
  @Input() answer: TAnswer | undefined;
  userName: string | undefined;

  constructor(private readonly userService: UserService) {}

  ngOnChanges(): void {
    this.answer &&
      this.userService.getUser(this.answer.userId).subscribe({
        next: (response) => (this.userName = response.data.userName),
      });
  }
}
