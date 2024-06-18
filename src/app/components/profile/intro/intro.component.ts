import { Component } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {}
