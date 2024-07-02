import { Component, Input, OnChanges } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { TPaginatedQuestion } from '../../../types/data/question';
import { DatePipe } from '@angular/common';
import { UserService } from '../../../services/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../common/modal/modal.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [AvatarComponent, DatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnChanges {
  @Input() question: TPaginatedQuestion | undefined;
  userName: string | undefined;

  constructor(
    private readonly userService: UserService,
    private readonly dialog: MatDialog
  ) {}

  ngOnChanges(): void {
    this.question &&
      this.userService.getUser(this.question.userId).subscribe({
        next: (response) => {
          console.log(response);
          this.userName = response.data.userName;
        },
        error: (error) => console.log(error),
      });
  }

  onExpand(image: string) {
    this.dialog.open(ModalComponent, {
      data: {
        image: image,
      },
    });
  }
}
