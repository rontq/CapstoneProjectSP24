import { Component } from '@angular/core';


import { HeaderComponent } from '../page-components/header/header.component';
import { PageTitleComponent } from '../page-components/page-title/page-title.component';
import { FooterComponent } from '../page-components/footer/footer.component';

@Component({
  selector: 'app-internet-of-things',
  standalone: true,
  imports: [HeaderComponent, PageTitleComponent, FooterComponent],
  templateUrl: './internet-of-things.component.html',
  styleUrl: './internet-of-things.component.css'
})
export class InternetOfThingsComponent {


}
