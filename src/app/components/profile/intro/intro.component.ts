import { Component } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { MatDivider } from '@angular/material/divider';
import { TokenService } from '../../../services/token/token.service';
import { UserService } from '../../../services/user/user.service';
import { TUser } from '../../../types/data/user';
import { MatIcon } from '@angular/material/icon';
import { BookmarkService } from '../../../services/bookmark/bookmark.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [AvatarComponent, MatDivider, MatIcon],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  user: TUser | undefined;

  constructor(
    public userService: UserService,
    public bookmarkService: BookmarkService,
    public tokenService: TokenService
  ) {}

  ngOnInit(): void {
    const userId = this.tokenService.getUserId();
    this.userService.getUser(userId).subscribe({
      next: (response) => (this.user = response.data),
      error: (error) => console.log(error),
    });
  }
}
