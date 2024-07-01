import { Component } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { VoteService } from '../../../services/vote/vote.service';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { NgStyle } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answers',
  standalone: true,
  imports: [AvatarComponent, MatIcon, NgStyle],
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.scss',
  providers: [VoteService],
})
export class AnswersComponent {
  actions: string[] = ['Visit', 'Delete'];
  icons: string[] = ['assignment', 'delete'];

  constructor(
    public userService: UserService,
    private readonly router: Router
  ) {}

  onVisitClick(id: number): void {
    this.router.navigateByUrl(`question/${id}`);
  }

  onDeleteClick(id: number) {}
}
