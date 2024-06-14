import { Component } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  actions: string[] = ['Action One', 'Action Two', 'Action Three'];
}
