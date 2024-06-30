import { Component, OnInit } from '@angular/core';
import { IntroComponent } from '../../components/profile/intro/intro.component';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [IntroComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  userName: string | undefined;

  constructor(public tokenService: TokenService) {}

  ngOnInit(): void {
    this.userName = this.tokenService.getUsername();
  }
}
