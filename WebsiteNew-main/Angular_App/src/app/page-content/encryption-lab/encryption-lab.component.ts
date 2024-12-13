import { Component } from '@angular/core';

import { HeaderComponent } from '../page-components/header/header.component';
import { PageTitleComponent } from '../page-components/page-title/page-title.component';
import { FooterComponent } from '../page-components/footer/footer.component';


@Component({
  selector: 'app-encryption-lab',
  standalone: true,
  imports: [HeaderComponent, PageTitleComponent, FooterComponent],
  templateUrl: './encryption-lab.component.html',
  styleUrl: './encryption-lab.component.css'
})
export class EncryptionLabComponent {

}
