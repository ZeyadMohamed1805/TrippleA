import { Component, Input, OnInit } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { Router } from '@angular/router';
import { TQuestion } from '../../../types/data/question';
import { DatePipe, NgStyle } from '@angular/common';
import { TAvatar } from '../../../types/data/avatar';
import { MatIcon } from '@angular/material/icon';
import { BookmarkService } from '../../../services/bookmark/bookmark.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [AvatarComponent, MatIcon, NgStyle, DatePipe],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent implements OnInit {
  actions: string[] = ['Details', 'Bookmark', 'Share'];
  icons: string[] = ['assignment', 'bookmark', 'share'];
  @Input() data: TQuestion | undefined;
  avatar: TAvatar | undefined;

  constructor(
    private router: Router,
    private readonly bookmarkService: BookmarkService
  ) {}

  onDetailsClick(): void {
    this.router.navigateByUrl(`question/${this.data?.id}`);
  }

  onBookmarkClick() {
    this.data && this.bookmarkService.set(this.data.id);
  }

  onShareClick() {}

  ngOnInit(): void {
    this.avatar = {
      userName: this.data?.userName || '',
      createdIn: this.data?.createdIn,
    };
  }
}
