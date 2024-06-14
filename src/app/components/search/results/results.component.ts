import { Component } from '@angular/core';
import { QuestionComponent } from '../../common/question/question.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {}
