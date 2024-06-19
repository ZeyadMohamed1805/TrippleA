import { Component } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [AvatarComponent, CommentComponent],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
})
export class AnswerComponent {
  actions: string[] = ['Upvote', 'Comment', 'Downvote'];
}
