import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TUser } from '../../types/data/user';
import { TResponse } from '../../types/data/response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly apiService: ApiService) {}

  getUser(userId: string) {
    return this.apiService.get<TResponse<TUser>>(`/${userId}`);
  }
}
