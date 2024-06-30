import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommentService } from '../../../services/comment/comment.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss',
  providers: [CommentService],
})
export class DeleteComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public commentId: number,
    private readonly commentService: CommentService
  ) {}

  onConfirm() {
    this.commentService.deleteComment(this.commentId);
  }
}
