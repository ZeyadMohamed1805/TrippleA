import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { Router } from '@angular/router';
import { TQuestion } from '../../../types/data/question';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [AvatarComponent, DatePipe],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  actions: string[] = ['Details', 'Bookmark', 'Share'];
  @Input() data: TQuestion | undefined;

  constructor(private router: Router) {}

  onDetailsClick(): void {
    this.router.navigateByUrl('question');
  }
}
