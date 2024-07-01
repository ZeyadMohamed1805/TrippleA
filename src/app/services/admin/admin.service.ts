import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  questions: any[] = [];
  answers: any[] = [];
  categories: any[] = [];
  users: any[] = [];
  ads: any[] = [];

  constructor(private readonly apiService: ApiService) {}

  getAll() {
    this.apiService.get('/api/Category').subscribe({
      next: (response: any) => (this.categories = response.data),
      error: (error) => console.log(error),
    });
    this.apiService.get('/GetQuestionsPaginated').subscribe({
      next: (response: any) =>
        (this.questions = response.data.data.map((question: any) => ({
          id: question.id,
          title: question.title,
          description: question.description,
          categoryName: question.categoryName,
        }))),
      error: (error) => console.log(error),
    });
    this.apiService.get('/api/Advertisment').subscribe({
      next: (response: any) =>
        (this.ads = response.data.map((ad: any) => ({
          id: ad.id,
          title: ad.title,
          companyLink: ad.companyLink,
          companyName: ad.companyName,
        }))),
      error: (error) => console.log(error),
    });
  }

  post(endpoint: string, body: any) {
    this.apiService.post(endpoint, body).subscribe({
      next: () => this.getAll(),
      error: (error) => console.log(error),
    });
  }

  put(endpoint: string, body: any) {
    this.apiService.put(endpoint, body).subscribe({
      next: () => this.getAll(),
      error: (error) => console.log(error),
    });
  }

  delete(endpoint: string) {
    this.apiService.delete(endpoint).subscribe({
      next: () => this.getAll(),
      error: (error) => console.log(error),
    });
  }
}
