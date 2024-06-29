import { Component, Input } from '@angular/core';
import { QuestionComponent } from '../../common/question/question.component';
import { TQuestion } from '../../../types/data/question';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  @Input() questions: TQuestion[] = [];
}
