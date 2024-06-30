import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TAdvertisement } from '../../types/data/advertisement';
import { TResponse } from '../../types/data/response';

@Injectable({
  providedIn: 'root',
})
export class AdService {
  advertisements: TAdvertisement[] = [];

  constructor(private readonly apiService: ApiService) {}

  get() {
    this.apiService
      .get<TResponse<TAdvertisement[]>>('/api/Advertisment')
      .subscribe({
        next: (response) => (this.advertisements = response.data),
        error: (error) => console.log(error),
      });
  }
}
