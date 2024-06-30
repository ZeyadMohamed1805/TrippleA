import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TAccessToken, TLoginData } from '../../types/data/login';
import { TRegisterData } from '../../types/data/register';
import { TResponse } from '../../types/data/response';
import { StorageService } from '../storage/storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly api: ApiService,
    private readonly storageService: StorageService,
    private readonly router: Router
  ) {}

  login(user: TLoginData) {
    return this.api.post<TLoginData, TResponse<TAccessToken>>(
      '/api/v1/authentication/signin',
      user
    );
  }

  register(user: TRegisterData) {
    return this.api.post<TRegisterData, TResponse<string>>(
      '/api/v1/user/createUser',
      user
    );
  }

  logout() {
    this.storageService.removeItem('AAA_TOKEN');
    this.router.navigateByUrl('loading');
  }
}
