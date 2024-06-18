import { Component } from '@angular/core';
import { IntroComponent } from '../../components/profile/intro/intro.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [IntroComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
