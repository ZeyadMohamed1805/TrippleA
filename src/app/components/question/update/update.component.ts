import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommentService } from '../../../services/comment/comment.service';
import { TComment } from '../../../types/data/comment';
import { TAnswer } from '../../../types/data/answer';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
  providers: [CommentService],
})
export class UpdateComponent {
  formGroup: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { comment?: TComment; answer?: TAnswer },
    private readonly commentService: CommentService,
    private readonly formBuilder: FormBuilder
  ) {
    data.comment
      ? (this.formGroup = this.formBuilder.group({
          content: ['', [Validators.required]],
        }))
      : (this.formGroup = this.formBuilder.group({
          content: ['', [Validators.required]],
        }));
  }

  onConfirm() {
    this.data.comment &&
      !this.formGroup.invalid &&
      this.commentService.updateComment(
        this.data.comment.id,
        this.formGroup.value.content
      );
  }
}
