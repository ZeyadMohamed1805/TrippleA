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
export class IntroComponent {
  constructor(
    public userService: UserService,
    public tokenService: TokenService
  ) {}
}
