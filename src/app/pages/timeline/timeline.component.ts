import { Component, OnInit } from '@angular/core';
import { AskComponent } from '../../components/timeline/ask/ask.component';
import { QuestionComponent } from '../../components/common/question/question.component';
import { QuestionService } from '../../services/question/question.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [AskComponent, QuestionComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent implements OnInit {
  constructor(public questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionService.getQuestions();
  }
}
