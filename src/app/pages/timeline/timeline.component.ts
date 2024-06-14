import { Component } from '@angular/core';
import { AskComponent } from '../../components/timeline/ask/ask.component';
import { QuestionComponent } from '../../components/common/question/question.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [AskComponent, QuestionComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {}
