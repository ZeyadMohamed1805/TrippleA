import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private hubConnection: signalR.HubConnection | undefined;

  constructor() {}

  public connect = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7061/notificationHub')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch((err) => console.log('Error while starting connection: ' + err));
  };

  public receiveNotifications = () => {
    this.hubConnection!.on('ReceiveNotification', (user, message) => {
      console.log(`Message from ${user}: ${message}`);
    });
  };
}
