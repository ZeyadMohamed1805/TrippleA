import { Component, Input, OnInit } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { QuestionService } from '../../../services/question/question.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  @Input() questionId: number | undefined;

  constructor(
    private readonly questionService: QuestionService,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.questionService.getQuestion(this.questionId!).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: () =>
        this.snackBar.open('Please try again', 'Ok!', {
          panelClass: ['error-snackbar'],
        }),
    });
  }
}
