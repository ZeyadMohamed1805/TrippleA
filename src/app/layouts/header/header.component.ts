import { Component, OnInit } from '@angular/core';
import { AvatarComponent } from '../../components/common/avatar/avatar.component';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';
import { TokenService } from '../../services/token/token.service';
import { NotificationService } from '../../services/notification/notification.service';
import { TitleCasePipe } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AvatarComponent,
    RouterLink,
    MatBadgeModule,
    MatIconModule,
    MatMenuModule,
    MatDivider,
    TitleCasePipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  userName: string | undefined;
  links: { icon: string; path: string }[] = [
    { icon: '../../../assets/icons/timeline.svg', path: 'timeline' },
    { icon: '../../../assets/icons/search.svg', path: 'search' },
  ];

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
    public notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.userName = this.tokenService.getUsername();
    this.notificationService.connect();
    this.notificationService.getNotifications();
    this.notificationService.receiveNotifications();
  }

  onProfileClick(): void {
    this.router.navigateByUrl('profile');
  }

  onLogout() {
    this.authService.logout();
  }
}
