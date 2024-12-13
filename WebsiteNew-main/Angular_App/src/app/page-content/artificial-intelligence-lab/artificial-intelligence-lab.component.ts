import { Component } from '@angular/core';

import { HeaderComponent } from '../page-components/header/header.component';
import { PageTitleComponent } from '../page-components/page-title/page-title.component';
import { FooterComponent } from '../page-components/footer/footer.component';

@Component({
  selector: 'app-artificial-intelligence-lab',
  standalone: true,
  imports: [HeaderComponent, PageTitleComponent, FooterComponent],
  templateUrl: './artificial-intelligence-lab.component.html',
  styleUrl: './artificial-intelligence-lab.component.css'
})
export class ArtificialIntelligenceLabComponent {

}
