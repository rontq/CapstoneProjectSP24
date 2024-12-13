import { Component } from '@angular/core';

import { FooterComponent } from '../page-components/footer/footer.component';
import { HeaderComponent } from '../page-components/header/header.component';
import { ChallengeFeatureComponent} from '../page-components/challenge/challenge-feature.component';
import { ApproachComponent } from '../page-components/approach/approach.component';
import { PageTitleComponent } from '../page-components/page-title/page-title.component';
import { ButtonComponent } from '../page-components/button/button.component';


@Component({
  selector: 'app-healthcare',
  standalone: true,
  imports: [HeaderComponent,
            PageTitleComponent, 
            FooterComponent, 
            ApproachComponent, 
            ChallengeFeatureComponent,ButtonComponent],
  templateUrl: './healthcare.component.html',
  styleUrl: './healthcare.component.css'
})
export class HealthcareComponent {

}
