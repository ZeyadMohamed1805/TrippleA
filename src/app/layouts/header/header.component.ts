import { Component } from '@angular/core';
import { AvatarComponent } from '../../components/common/avatar/avatar.component';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';

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
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links: { icon: string; path: string }[] = [
    { icon: '../../../assets/icons/timeline.svg', path: '/timeline' },
    { icon: '../../../assets/icons/search.svg', path: '/search' },
  ];

  constructor(private router: Router) {}

  onAvatarClick(route: string): void {
    this.router.navigateByUrl(route);
  }
}
