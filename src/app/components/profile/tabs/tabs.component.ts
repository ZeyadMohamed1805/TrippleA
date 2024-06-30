import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BookmarksComponent } from '../bookmarks/bookmarks.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MatTabsModule, BookmarksComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {}
