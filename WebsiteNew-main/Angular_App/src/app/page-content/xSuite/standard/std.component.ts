import { Component } from '@angular/core';
import { xHeaderComponent } from '../app-xheader/header.component';
import { xLoginComponent } from '../login-form/login.component';
@Component({
  selector: 'app-login-std',
  standalone: true,
  imports: [xHeaderComponent, xLoginComponent],
  templateUrl: './std.component.html',
  styleUrl: './std.component.css'
})
export class xSuiteStdLoginComponent {
}
