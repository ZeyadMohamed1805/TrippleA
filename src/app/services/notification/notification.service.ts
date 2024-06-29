import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  userId: string | undefined;
  notifications: any = [];

  constructor(
    private readonly tokenService: TokenService,
    private readonly apiService: ApiService
  ) {
    this.userId = tokenService.getUserId();
  }

  getNotifications() {
    this.notifications = this.apiService
      .get(`/api/Notification?userId=${this.userId}`)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
