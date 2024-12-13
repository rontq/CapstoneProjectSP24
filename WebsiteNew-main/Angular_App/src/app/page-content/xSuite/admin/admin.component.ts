import { Component } from '@angular/core';
import { xHeaderComponent } from '../app-xheader/header.component';
import { xLoginComponent } from '../login-form/login.component';
@Component({
  selector: 'app-xsuite-adm',
  standalone: true,
  imports: [xHeaderComponent, xLoginComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class xSuiteAdminComponent {
}
