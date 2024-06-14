import { Component } from '@angular/core';
import { QuestionComponent } from '../../components/common/question/question.component';

@Component({
  selector: 'app-bookmarks',
  standalone: true,
  imports: [QuestionComponent],
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.scss',
})
export class BookmarksComponent {}
