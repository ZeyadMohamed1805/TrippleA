import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: ApiService) {}

  login(user: any) {
    return this.api.post<any, any>('/authentication/signin', user);
  }

  register(user: any) {
    return this.api.post<any, any>('/authentication/signup', user);
  }
}
