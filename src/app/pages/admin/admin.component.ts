import { Component } from '@angular/core';
import { AccordionComponent } from '../../components/admin/accordion/accordion.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {}
