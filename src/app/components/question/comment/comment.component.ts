import { Component } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [AvatarComponent, MatDivider],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {}
