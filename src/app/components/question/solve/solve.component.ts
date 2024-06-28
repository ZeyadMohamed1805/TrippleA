import { Component } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';

@Component({
  selector: 'app-solve',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './solve.component.html',
  styleUrl: './solve.component.scss',
})
export class SolveComponent {
  postActions: string[] = ['Answer', 'Image', 'Clear'];
  previewImage: string | undefined;
  image: any = undefined;

  onUpload(event: any) {
    this.image = event.target.files[0];
    this.previewImage = URL.createObjectURL(event.target.files[0]);
    console.log(this.previewImage, this.image);
  }
}
