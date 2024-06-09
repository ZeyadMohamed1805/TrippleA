import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
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
