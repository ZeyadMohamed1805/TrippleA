import { Component } from '@angular/core';
import { StaticComponent } from '../../components/loading/static/static.component';
import { SpinnerComponent } from '../../components/loading/spinner/spinner.component';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [StaticComponent, SpinnerComponent],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {}
