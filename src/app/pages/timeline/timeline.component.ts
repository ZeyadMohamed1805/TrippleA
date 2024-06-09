import { Component } from '@angular/core';
import { AskComponent } from '../../components/timeline/ask/ask.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [AskComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {}
