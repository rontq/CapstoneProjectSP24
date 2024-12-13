import { Component } from '@angular/core';

import { HeaderComponent } from '../page-components/header/header.component';
import { PageTitleComponent } from '../page-components/page-title/page-title.component';
import { FooterComponent } from '../page-components/footer/footer.component';


@Component({
  selector: 'app-augmented-reality-lab',
  standalone: true,
  imports: [HeaderComponent, PageTitleComponent, FooterComponent],
  templateUrl: './augmented-reality-lab.component.html',
  styleUrl: './augmented-reality-lab.component.css'
})
export class AugmentedRealityLabComponent {

}
