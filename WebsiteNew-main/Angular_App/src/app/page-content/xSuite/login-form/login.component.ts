import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class xLoginComponent {
  @Input({required: true}) title!: string; // make the link attribute for this component mandatory
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
      rememberMe: [false]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
