import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from '../../components/question/details/details.component';
import { MatDivider } from '@angular/material/divider';
import { AnswerComponent } from '../../components/question/answer/answer.component';
import { AvatarComponent } from '../../components/common/avatar/avatar.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [AvatarComponent, DetailsComponent, AnswerComponent, MatDivider],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent implements OnInit {
  actions: string[] = ['Answer', 'Image', 'Clear'];
  previewImage: string | undefined;
  image: any = undefined;
  questionId: number | undefined;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.questionId = params['id'];
    });
  }

  onUpload(event: any) {
    this.image = event.target.files[0];
    this.previewImage = URL.createObjectURL(event.target.files[0]);
    console.log(this.previewImage, this.image);
  }
}
