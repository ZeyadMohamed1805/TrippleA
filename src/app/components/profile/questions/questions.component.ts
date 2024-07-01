import { Component } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { NgStyle } from '@angular/common';
import { Router } from '@angular/router';
import { BookmarkService } from '../../../services/bookmark/bookmark.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [AvatarComponent, MatIconModule, NgStyle],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
  actions: string[] = ['Details', 'Bookmark', 'Share'];
  icons: string[] = ['assignment', 'bookmark', 'share'];

  constructor(
    public userService: UserService,
    private readonly bookmarkService: BookmarkService,
    private readonly router: Router
  ) {}

  onDetailsClick(id: number): void {
    this.router.navigateByUrl(`question/${id}`);
  }

  onBookmarkClick(id: number) {
    this.bookmarkService.set(id);
  }

  onShareClick() {}
}
