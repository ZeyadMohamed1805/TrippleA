import { Component } from '@angular/core';
import { DetailsComponent } from '../../components/question/details/details.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [DetailsComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {}
