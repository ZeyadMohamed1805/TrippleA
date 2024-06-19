import { Component } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';

@Component({
  selector: 'app-ask',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './ask.component.html',
  styleUrl: './ask.component.scss',
})
export class AskComponent {
  actions: string[] = ['Ask', 'Image', 'Search', 'Draft'];
}
