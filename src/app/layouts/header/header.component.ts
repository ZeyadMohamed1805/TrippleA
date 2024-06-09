import { Component } from '@angular/core';
import { AvatarComponent } from '../../components/common/avatar/avatar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  icons: string[] = [
    '../../../assets/icons/search.svg',
    '../../../assets/icons/bookmark.svg',
    '../../../assets/icons/notification.svg',
  ];
}
