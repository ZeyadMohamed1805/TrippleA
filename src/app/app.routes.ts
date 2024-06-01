import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'loading' },
  { path: 'loading', component: LoadingComponent },
  { path: 'timeline', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
];
