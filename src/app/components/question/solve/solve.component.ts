import { Component, OnInit } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { TokenService } from '../../../services/token/token.service';

@Component({
  selector: 'app-solve',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './solve.component.html',
  styleUrl: './solve.component.scss',
})
export class SolveComponent implements OnInit {
  postActions: string[] = ['Answer', 'Image', 'Clear'];
  previewImage: string | undefined;
  image: any = undefined;
  userName: string | undefined;

  constructor(private readonly tokenService: TokenService) {}

  ngOnInit(): void {
    this.userName = this.tokenService.getUsername();
  }

  onUpload(event: any) {
    this.image = event.target.files[0];
    this.previewImage = URL.createObjectURL(event.target.files[0]);
    console.log(this.previewImage, this.image);
  }
}
