import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  token: any;

  constructor(private readonly storageService: StorageService) {
    const token: string = this.storageService.getItem('AAA_TOKEN');
    this.token = token && jwtDecode(token);
  }

  decodeToken() {
    const token: string = this.storageService.getItem('AAA_TOKEN');
    this.token = token && jwtDecode(token);
  }

  getUserId() {
    return (
      this.token &&
      this.token[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
      ]
    );
  }

  getUsername() {
    return (
      this.token &&
      this.token['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
    );
  }

  getEmail() {
    return (
      this.token &&
      this.token[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
      ]
    );
  }

  getRole() {
    return (
      this.token &&
      this.token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    );
  }
}
