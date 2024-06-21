import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TAccessToken, TLoginData } from '../../types/data/login';
import { TRegisterData } from '../../types/data/register';
import { TResponse } from '../../types/data/response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly api: ApiService) {}

  login(user: TLoginData) {
    return this.api.post<TLoginData, TResponse<TAccessToken>>(
      '/v1/authentication/signin',
      user
    );
  }

  register(user: TRegisterData) {
    return this.api.post<TRegisterData, TResponse<string>>(
      '/v1/user/createUser',
      user
    );
  }
}
