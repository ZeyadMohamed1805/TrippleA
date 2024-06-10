import { Component } from '@angular/core';
import { AvatarComponent } from '../../components/common/avatar/avatar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links: { icon: string; path: string }[] = [
    { icon: '../../../assets/icons/search.svg', path: '/search' },
    { icon: '../../../assets/icons/bookmark.svg', path: '/timeline' },
    { icon: '../../../assets/icons/notification.svg', path: '/timeline' },
  ];
}
