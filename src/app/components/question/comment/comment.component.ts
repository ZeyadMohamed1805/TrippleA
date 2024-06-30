import { Component, Input, OnInit } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { MatDivider } from '@angular/material/divider';
import { CommentService } from '../../../services/comment/comment.service';
import { ReplyComponent } from '../reply/reply.component';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
    AvatarComponent,
    MatDivider,
    ReplyComponent,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
  providers: [CommentService],
})
export class CommentComponent implements OnInit {
  @Input() answerId: number | undefined;
  commentForm: FormGroup;

  constructor(
    public commentService: CommentService,
    private readonly formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar
  ) {
    this.commentForm = this.formBuilder.group({
      content: [''],
    });
  }

  ngOnInit(): void {
    this.commentService.getComments(this.answerId!);
  }

  onViewMore(): void {
    this.commentService.getNextPage();
  }

  onClear(): void {
    this.commentForm.reset();
  }

  onSubmit(): void {
    if (this.commentForm.value.content.trim('').length) {
      const body = {
        content: this.commentForm.value.content,
        answerId: this.answerId!,
      };
      this.commentService.postComment(body).subscribe({
        next: () => {
          this.snackBar.open('Comment successfully added', 'Awesome!');
          this.onClear();
        },
        error: () => {
          this.snackBar.open('Please try again', 'Ok!', {
            panelClass: ['error-snackbar'],
          });
        },
      });
    }
  }
}
