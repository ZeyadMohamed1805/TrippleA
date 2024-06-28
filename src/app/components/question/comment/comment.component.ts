import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { MatDivider } from '@angular/material/divider';
import { TComment } from '../../../types/data/comment';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [AvatarComponent, MatDivider],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input() comments: TComment[] = [];
}
