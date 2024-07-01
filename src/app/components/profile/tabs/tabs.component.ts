import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BookmarksComponent } from '../bookmarks/bookmarks.component';
import { UserService } from '../../../services/user/user.service';
import { TokenService } from '../../../services/token/token.service';
import { NgIf } from '@angular/common';
import { QuestionsComponent } from '../questions/questions.component';
import { AnswersComponent } from '../answers/answers.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    MatTabsModule,
    BookmarksComponent,
    QuestionsComponent,
    AnswersComponent,
    NgIf,
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent implements OnInit {
  isItMe: boolean = true;

  constructor(
    public userService: UserService,
    public tokenService: TokenService
  ) {}

  ngOnInit(): void {
    const userId: string = this.tokenService.getUserId();
    this.isItMe = userId === this.userService.userProfile?.id;
  }
}
