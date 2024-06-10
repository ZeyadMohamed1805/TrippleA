import { Routes } from '@angular/router';
import { LoadingComponent } from './pages/loading/loading.component';
import { AuthComponent } from './pages/auth/auth.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'loading' },
  { path: 'auth', component: AuthComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'search', component: SearchComponent },
];
