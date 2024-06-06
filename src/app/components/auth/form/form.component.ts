import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatTabsModule, LoginComponent, RegisterComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {}
