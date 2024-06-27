import { Component, Input, OnInit } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  @Input() questionId: number | undefined;

  ngOnInit(): void {
    console.log(this.questionId);
  }
}
