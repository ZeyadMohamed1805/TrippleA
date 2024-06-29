import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { CommentComponent } from '../comment/comment.component';
import { DOCUMENT, DatePipe, NgIf, NgStyle } from '@angular/common';
import { SolveComponent } from '../solve/solve.component';
import { AnswerService } from '../../../services/answer/answer.service';
import { SpinnerComponent } from '../../loading/spinner/spinner.component';
import { ResponseComponent } from '../response/response.component';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [
    AvatarComponent,
    CommentComponent,
    SolveComponent,
    SpinnerComponent,
    ResponseComponent,
    NgStyle,
    NgIf,
    DatePipe,
  ],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss',
  providers: [AnswerService],
})
export class AnswerComponent implements OnInit {
  actions: string[] = ['Upvote', 'Comment', 'Downvote'];
  @Input() questionId: number | undefined;
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
        this.answerService.getNextPage();
        this.isBottomReached = false;
      }, 1000);

      this.isBottomReached = true;
    }
  }
  constructor(
    public answerService: AnswerService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.answerService.getAnswers(this.questionId!);
  }
}
