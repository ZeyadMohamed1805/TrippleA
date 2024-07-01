import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MatTabsModule, AccordionComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  categories: any[] = [
    { id: 1, name: 'test' },
    { id: 2, name: 'PD' },
  ];
  ads: any[] = [
    {
      id: 1,
      image:
        'http://res.cloudinary.com/dzlsdjx13/image/upload/v1719749725/knucu8tdbunbfkmqgtsc.svg',
      title: 'ShopFusion',
      companyLink: 'https://shopfusion-project.vercel.app',
      companyName: 'ShopFusion',
    },
    {
      id: 2,
      image:
        'http://res.cloudinary.com/dzlsdjx13/image/upload/v1719749827/iksviciurrkspi8uxmqg.png',
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
      image:
        'http://res.cloudinary.com/dzlsdjx13/image/upload/v1719722923/otj2ecsxq9rdt2ygqdh6.png',
      createdIn: '2024-06-30T07:48:40.3167348',
      categoryName: 'test',
      userName: 'Hamada_1805',
    },
  ];
  answers: any[] = [
    {
      id: 6248,
      votes: 0,
      createdIn: '2024-06-30T11:05:28.9998348',
      image: 'NoFile',
      description: 'This is my first answer',
      questionId: 26,
      userId: '335544a9-59c1-42a4-9dcd-cb05d9fb2491',
    },
  ];
}
