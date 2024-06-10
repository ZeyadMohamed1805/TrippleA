import { Routes } from '@angular/router';
import { LoadingComponent } from './pages/loading/loading.component';
import { AuthComponent } from './pages/auth/auth.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { SearchComponent } from './pages/search/search.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'loading' },
  { path: 'auth', component: AuthComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'search', component: SearchComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'profile', component: ProfileComponent },
];
