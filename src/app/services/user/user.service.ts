import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TUser, TUserProfile } from '../../types/data/user';
import { TResponse } from '../../types/data/response';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userProfile: TUserProfile | undefined;

  constructor(
    private readonly apiService: ApiService,
    private readonly tokenService: TokenService
  ) {}

  getUser(userId: string) {
    return this.apiService.get<TResponse<TUser>>(`/${userId}`);
  }

  getUserProfile(userId: string) {
    this.apiService
      .get<TResponse<TUserProfile>>(`/userprofile/${userId}`)
      .subscribe({
        next: (response) => (this.userProfile = response.data),
        error: (error) => console.log(error),
      });
  }
}
