import { Component, Input, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { AvatarComponent } from '../avatar/avatar.component';
import { Router } from '@angular/router';
import { TQuestion } from '../../../types/data/question';
import { DatePipe, NgStyle } from '@angular/common';
import { TAvatar } from '../../../types/data/avatar';
import { MatIcon } from '@angular/material/icon';
import { BookmarkService } from '../../../services/bookmark/bookmark.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [AvatarComponent, MatIcon, MatMenuModule, NgStyle, DatePipe],
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
    private readonly bookmarkService: BookmarkService,
    private clipboard: Clipboard,
    private snackBar: MatSnackBar
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

  copyLink() {
    this.data &&
      this.clipboard.copy(`http://localhost:4200/question/${this.data.id}`);
    this.snackBar.open('Link copied to clipboard!', 'Close', {
      duration: 2000,
    });
  }
}
