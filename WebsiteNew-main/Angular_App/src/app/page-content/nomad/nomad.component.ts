import { Component } from '@angular/core';

import { FooterComponent } from '../page-components/footer/footer.component';
import { HeaderComponent } from '../page-components/header/header.component';
import { PageTitleComponent } from '../page-components/page-title/page-title.component';


@Component({
  selector: 'app-nomad',
  standalone: true,
  imports: [HeaderComponent,
            PageTitleComponent, 
            FooterComponent],
  templateUrl: './nomad.component.html',
  styleUrl: './nomad.component.css'
})
export class NOMADComponent {

}
