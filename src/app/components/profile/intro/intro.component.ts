import { Component, OnInit } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { MatDivider } from '@angular/material/divider';
import { TokenService } from '../../../services/token/token.service';
import { UserService } from '../../../services/user/user.service';
import { MatIcon } from '@angular/material/icon';
import { BookmarkService } from '../../../services/bookmark/bookmark.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [AvatarComponent, MatDivider, MatIcon, NgIf],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent implements OnInit {
  isItMe: boolean = true;

  constructor(
    public userService: UserService,
    public bookmarkService: BookmarkService,
    public tokenService: TokenService
  ) {}

  ngOnInit(): void {
    const userId: string = this.tokenService.getUserId();
    this.isItMe = userId === this.userService.userProfile?.id;
  }
}
