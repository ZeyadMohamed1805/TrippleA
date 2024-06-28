import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { TPaginatedQuestion } from '../../../types/data/question';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [AvatarComponent, DatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  @Input() question: TPaginatedQuestion | undefined;
}
