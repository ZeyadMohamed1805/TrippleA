import { Component, OnInit } from '@angular/core';
import { AvatarComponent } from '../../common/avatar/avatar.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../../services/api/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TCategory } from '../../../types/data/category';
import { TResponse } from '../../../types/data/response';
import { TokenService } from '../../../services/token/token.service';

@Component({
  selector: 'app-ask',
  standalone: true,
  imports: [
    AvatarComponent,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './ask.component.html',
  styleUrl: './ask.component.scss',
})
export class AskComponent implements OnInit {
  actions: string[] = ['Ask', 'Search', 'Image', 'Clear'];
  categories: TCategory[] = [];
  previewImage: string | undefined;
  image: any = undefined;
  questionForm: FormGroup;
  userName: string | undefined;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private tokenService: TokenService,
    private snackBar: MatSnackBar
  ) {
    this.questionForm = this.formBuilder.group({
      categoryid: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.userName = this.tokenService.getUsername();
    this.apiService.get<TResponse<TCategory[]>>('/api/category').subscribe({
      next: (response) => (this.categories = response.data),
      error: () => {
        this.snackBar.open('Some data were not fetched successfully', 'Ok!', {
          panelClass: ['error-snackbar'],
        });
      },
    });
  }

  onSearchClick(): void {
    this.router.navigateByUrl(
      `search?title=${this.questionForm.value.title}&categoryId=${this.questionForm.value.categoryid}`
    );
  }

  onUpload(event: any): void {
    this.image = event.target.files[0];
    this.previewImage = URL.createObjectURL(event.target.files[0]);
  }

  onClear(): void {
    this.questionForm.reset();
    this.previewImage = undefined;
    this.image = undefined;
  }

  onSubmit(): void {
    let formdata = new FormData();

    Object.keys(this.questionForm.value).forEach((key) => {
      formdata.append(key, this.questionForm.value[key]);
    });

    formdata.append('image', this.image);

    this.apiService.post<FormData, string>('/AddQuestion', formdata).subscribe({
      next: () => {
        this.snackBar.open('Question successfully added', 'Awesome!');
        this.onClear();
      },
      error: () =>
        this.snackBar.open('Please try again', 'Ok!', {
          panelClass: ['error-snackbar'],
        }),
    });
  }
}
