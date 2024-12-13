import { Component } from '@angular/core';

import { HeaderComponent } from '../page-components/header/header.component';
import { PageTitleComponent } from '../page-components/page-title/page-title.component';
import { FooterComponent } from '../page-components/footer/footer.component';
import { ChallengeFeatureComponent} from '../page-components/challenge/challenge-feature.component';
import { ApproachComponent } from '../page-components/approach/approach.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent, 
            PageTitleComponent, 
            FooterComponent, 
            ApproachComponent, 
            ChallengeFeatureComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {}
