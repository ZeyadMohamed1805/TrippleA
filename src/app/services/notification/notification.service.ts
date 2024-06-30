import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { ApiService } from '../api/api.service';
import { TNotification } from '../../types/data/notification';
import { TResponse } from '../../types/data/response';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private hubConnection: signalR.HubConnection | undefined;
  notifications: TNotification[] = [];

  constructor(
    private readonly apiService: ApiService,
    private readonly tokenService: TokenService
  ) {}

  connect() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7061/notificationHub')
      .build();

    this.hubConnection
      .start()
      .then(() => this.sendUserId())
      .catch((err) => console.log('Error while starting connection: ' + err));
  }

  receiveNotifications() {
    this.hubConnection!.on('ReceiveNotification', () => {
      this.getNotifications();
    });
  }

  getNotifications() {
    const userId = this.tokenService.getUserId();
    this.apiService
      .get<TResponse<TNotification[]>>(`/api/notification?userId=${userId}`)
      .subscribe({
        next: (response) => {
          this.notifications = response.data;
        },
        error: (error) => console.log(error),
      });
  }

  sendUserId() {
    this.hubConnection
      ?.invoke('reauthme', this.tokenService.getUserId())
      .catch((err) => console.error(err));
  }
}
