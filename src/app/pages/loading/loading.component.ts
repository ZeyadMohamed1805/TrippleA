import { AfterViewInit, Component } from '@angular/core';
import { SpinnerComponent } from '../../components/loading/spinner/spinner.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.router.navigateByUrl('auth'), 3000);
  }
}
