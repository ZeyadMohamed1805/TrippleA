import { Component } from '@angular/core';
import { DetailsComponent } from '../../components/question/details/details.component';
import { MatDivider } from '@angular/material/divider';
import { AnswerComponent } from '../../components/question/answer/answer.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [DetailsComponent, AnswerComponent, MatDivider],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {}
