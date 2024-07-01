import { Component } from '@angular/core';
import { TabsComponent } from '../../components/admin/tabs/tabs.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [TabsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {}
