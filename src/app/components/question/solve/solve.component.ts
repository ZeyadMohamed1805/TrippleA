import { Component, Input, OnInit } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { TokenService } from '../../../services/token/token.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AnswerService } from '../../../services/answer/answer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-solve',
  standalone: true,
  imports: [
    AvatarComponent,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIcon,
    NgIf,
  ],
  templateUrl: './solve.component.html',
  styleUrl: './solve.component.scss',
})
export class SolveComponent implements OnInit {
  postActions: string[] = ['Answer', 'Image', 'Clear'];
  @Input() questionId: number | undefined;
  previewImage: string | undefined;
  image: any = undefined;
  userName: string | undefined;
  answerForm: FormGroup;

  constructor(
    private readonly tokenService: TokenService,
    private readonly formBuilder: FormBuilder,
    private readonly answerService: AnswerService,
    private readonly snackBar: MatSnackBar
  ) {
    this.answerForm = this.formBuilder.group({
      description: [''],
    });
  }

  ngOnInit(): void {
    this.userName = this.tokenService.getUsername();
  }

  onClear(): void {
    this.answerForm.reset();
    this.previewImage = undefined;
    this.image = undefined;
  }

  onUpload(event: any) {
    this.image = event.target.files[0];
    this.previewImage = URL.createObjectURL(event.target.files[0]);
    console.log(this.previewImage, this.image);
  }

  onSubmit(): void {
    if (this.answerForm.value.description.length) {
      let formData = new FormData();

      Object.keys(this.answerForm.value).forEach((key) => {
        formData.append(key, this.answerForm.value[key]);
      });

      formData.append('image', this.image);
      formData.append('questionId', `${this.questionId}`);

      this.answerService.postAnswers(formData).subscribe({
        next: () => {
          this.snackBar.open('Answer successfully added', 'Awesome!');
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
