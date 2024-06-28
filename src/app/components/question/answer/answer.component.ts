import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { CommentComponent } from '../comment/comment.component';
import { TAnswer } from '../../../types/data/answer';
import { DatePipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [AvatarComponent, CommentComponent, NgStyle, DatePipe],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
})
export class AnswerComponent {
  actions: string[] = ['Upvote', 'Comment', 'Downvote'];
  @Input() answer: TAnswer | undefined;
}
