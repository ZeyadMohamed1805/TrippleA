import { Component } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  actions: string[] = ['Details', 'Answer', 'Share'];

  constructor(private router: Router) {}

  onDetailsClick(): void {
    this.router.navigateByUrl('question');
  }
}
