import { Component } from '@angular/core';
import { StaticComponent } from '../static/static.component';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [StaticComponent],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {}
