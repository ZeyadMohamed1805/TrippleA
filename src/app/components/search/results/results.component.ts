import { Component, Input } from '@angular/core';
import { QuestionComponent } from '../../common/question/question.component';
import { TQuestion } from '../../../types/data/question';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [QuestionComponent, MatDivider],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  @Input() questions: TQuestion[] = [];
}
