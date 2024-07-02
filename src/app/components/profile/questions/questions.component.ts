import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { UserService } from '../../../services/user/user.service';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { NgStyle } from '@angular/common';
import { Router } from '@angular/router';
import { BookmarkService } from '../../../services/bookmark/bookmark.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../common/modal/modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [AvatarComponent, MatIconModule, MatMenuModule, NgStyle],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
  actions: string[] = ['Details', 'Bookmark', 'Share'];
  icons: string[] = ['assignment', 'bookmark', 'share'];

  constructor(
    public userService: UserService,
    private readonly bookmarkService: BookmarkService,
    private readonly router: Router,
    private clipboard: Clipboard,
    private snackBar: MatSnackBar,
    private readonly dialog: MatDialog
  ) {}

  onDetailsClick(id: number): void {
    this.router.navigateByUrl(`question/${id}`);
  }

  onBookmarkClick(id: number) {
    this.bookmarkService.set(id);
  }

  onShareClick() {}

  copyLink(id: number) {
    this.clipboard.copy(`http://localhost:4200/question/${id}`);
    this.snackBar.open('Link copied to clipboard!', 'Close', {
      duration: 2000,
    });
  }

  onExpand(image: string) {
    this.dialog.open(ModalComponent, {
      data: {
        image: image,
      },
    });
  }
}
