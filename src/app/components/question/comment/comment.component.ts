import { Component, Input, OnInit } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { MatDivider } from '@angular/material/divider';
import { CommentService } from '../../../services/comment/comment.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [AvatarComponent, MatDivider],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
  providers: [CommentService],
})
export class CommentComponent implements OnInit {
  @Input() answerId: number | undefined;

  constructor(public commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getComments(this.answerId!);
  }

  onViewMore(): void {
    this.commentService.getNextPage();
  }
}
