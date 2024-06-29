import { Component, OnInit } from '@angular/core';
import { MessageComponent } from '../../components/notifications/message/message.component';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
})
export class NotificationsComponent implements OnInit {
  constructor(private readonly tokenService: TokenService) {}

  ngOnInit(): void {
    console.log(this.tokenService.getUserId());
    console.log(this.tokenService.getEmail());
    console.log(this.tokenService.getUsername());
  }
}
