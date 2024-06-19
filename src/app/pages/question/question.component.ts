import { Component } from '@angular/core';
import { DetailsComponent } from '../../components/question/details/details.component';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [DetailsComponent, MatDivider],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {}
