import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AdminService } from '../../../services/admin/admin.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MatTabsModule, TableComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent implements OnInit {
  categories: any[] = [
    { id: 1, name: 'test' },
    { id: 2, name: 'PD' },
  ];
  ads: any[] = [
    {
      id: 1,
      title: 'ShopFusion',
      companyLink: 'https://shopfusion-project.vercel.app',
      companyName: 'ShopFusion',
    },
    {
      id: 2,
      title: 'ZCommerce',
      companyLink: 'https://z-commerce-project.vercel.app',
      companyName: 'ZCommerce',
    },
  ];
  questions: any[] = [
    {
      id: 26,
      description: 'Description',
      title: 'Title',
      categoryid: 'test',
    },
  ];
  answers: any[] = [
    {
      id: 6248,
      description: 'This is my first answer',
      questionId: 26,
    },
  ];
  users: any[] = [
    {
      email: 'email',
      password: 'password',
      userName: 'userName',
      name: 'name',
    },
  ];

  constructor(public adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAll();
  }
}
