import { Component, OnInit } from '@angular/core';
import { IntroComponent } from '../../components/profile/intro/intro.component';
import { TokenService } from '../../services/token/token.service';
import { TabsComponent } from '../../components/profile/tabs/tabs.component';
import { UserService } from '../../services/user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [IntroComponent, TabsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  userId: string | undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    public tokenService: TokenService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params['id'];
    });
    this.userId && this.userService.getUserProfile(this.userId!);
  }
}
