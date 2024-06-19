import { Component } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './ask.component.html',
  styleUrl: './ask.component.scss',
})
export class AskComponent {
  actions: string[] = ['Ask', 'Image', 'Draft', 'Search'];

  constructor(private router: Router) {}

  onSearchClick(): void {
    this.router.navigateByUrl('search');
  }
}
