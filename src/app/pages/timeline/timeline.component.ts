import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { AskComponent } from '../../components/timeline/ask/ask.component';
import { QuestionComponent } from '../../components/common/question/question.component';
import { QuestionService } from '../../services/question/question.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [AskComponent, QuestionComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollTop = window.scrollY || this.document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = this.document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
      setTimeout(() => {
        this.questionService.getNextPage();
      }, 1000);
    }
  }
  constructor(
    public questionService: QuestionService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.questionService.getQuestions();
  }
}
