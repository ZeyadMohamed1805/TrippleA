import { Routes } from '@angular/router';
import { LoadingComponent } from './pages/loading/loading.component';
import { AuthComponent } from './pages/auth/auth.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { SearchComponent } from './pages/search/search.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { QuestionComponent } from './pages/question/question.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'loading' },
  { path: 'auth', component: AuthComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'question/:id', component: QuestionComponent },
  { path: 'search', component: SearchComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: NotFoundComponent },
];
