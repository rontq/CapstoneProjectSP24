import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PageTitleComponent} from '../page-components/page-title/page-title.component';
import { FooterComponent } from '../page-components/footer/footer.component';
import { HeaderComponent } from '../page-components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [PageTitleComponent, 
    FooterComponent, 
    HeaderComponent, 
    ReactiveFormsModule, 
    HttpClientModule, 
    CommonModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      msg_subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  sendEmail() {
    if (this.contactForm.invalid) {
      return;
    }

    const url = 'http://localhost:3000/send-email'; // Node.js server URL
    this.http.post(url, this.contactForm.value).subscribe(response => {
      console.log('Email sent successfully', response);
    }, error => {
      console.error('Error sending email', error);
    });
  }
}
