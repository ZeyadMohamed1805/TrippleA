import { Component } from '@angular/core';
import { AvatarComponent } from '../../components/common/avatar/avatar.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links: { icon: string; path: string }[] = [
    { icon: '../../../assets/icons/timeline.svg', path: '/timeline' },
    { icon: '../../../assets/icons/search.svg', path: '/search' },
    { icon: '../../../assets/icons/bookmark.svg', path: '/bookmarks' },
    { icon: '../../../assets/icons/notification.svg', path: '/notifications' },
  ];

  constructor(private router: Router) {}

  onAvatarClick(): void {
    this.router.navigateByUrl('profile');
  }
}
