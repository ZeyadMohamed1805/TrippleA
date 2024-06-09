import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isLayoutHidden: boolean = false;
  routesThatHideLayout: string[] = ['/', '/loading', '/auth'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((route: any) => {
      this.isLayoutHidden = this.routesThatHideLayout.includes(route.url);
    });
  }
}
