import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { AskComponent } from '../../components/timeline/ask/ask.component';
import { QuestionComponent } from '../../components/common/question/question.component';
import { QuestionService } from '../../services/question/question.service';
import { DOCUMENT } from '@angular/common';
import { SpinnerComponent } from '../../components/loading/spinner/spinner.component';
import { MatDivider } from '@angular/material/divider';
import { AdsComponent } from '../../components/common/ads/ads.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    AskComponent,
    QuestionComponent,
    SpinnerComponent,
    AdsComponent,
    MatDivider,
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent implements OnInit {
  isBottomReached: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollTop = window.scrollY || this.document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = this.document.documentElement.scrollHeight;

    if (
      !this.isBottomReached &&
      scrollTop + windowHeight >= documentHeight - 160
    ) {
      setTimeout(() => {
        this.questionService.getNextPage();
        this.isBottomReached = false;
      }, 1000);

      this.isBottomReached = true;
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
