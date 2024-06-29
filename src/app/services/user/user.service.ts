import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TUser } from '../../types/data/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly apiService: ApiService) {}

  getUser(userId: string) {
    return this.apiService.get<TUser>(`/${userId}`);
  }
}
