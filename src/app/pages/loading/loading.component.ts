import { AfterViewInit, Component } from '@angular/core';
import { SpinnerComponent } from '../../components/loading/spinner/spinner.component';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent implements AfterViewInit {
  constructor(
    private router: Router,
    private storageService: StorageService,
    private tokenService: TokenService
  ) {}

  ngAfterViewInit(): void {
    const role = this.tokenService.getRole();
    setTimeout(() => {
      this.storageService.getItem<string>('AAA_TOKEN')
        ? role === 'Admin'
          ? this.router.navigateByUrl('admin')
          : this.router.navigateByUrl('timeline')
        : this.router.navigateByUrl('auth');
    }, 3000);
  }
}
