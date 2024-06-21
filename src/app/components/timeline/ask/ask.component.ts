import { Component } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask',
  standalone: true,
  imports: [AvatarComponent, MatSelectModule, MatInputModule],
  templateUrl: './ask.component.html',
  styleUrl: './ask.component.scss',
})
export class AskComponent {
  actions: string[] = ['Ask', 'Search', 'Image', 'Clear'];
  categories: string[] = ['One', 'Two', 'Three'];
  previewImage: string | undefined;
  image: any = undefined;

  constructor(private router: Router) {}

  onSearchClick(): void {
    this.router.navigateByUrl('search');
  }

  onUpload(event: any) {
    this.image = event.target.files[0];
    this.previewImage = URL.createObjectURL(event.target.files[0]);
    console.log(this.previewImage, this.image);
  }
}
