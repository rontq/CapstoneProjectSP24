import { Component } from '@angular/core';



import { ChallengeFeatureComponent} from '../page-components/challenge/challenge-feature.component';
import { ApproachComponent } from '../page-components/approach/approach.component';
import { PageTitleComponent } from '../page-components/page-title/page-title.component';
import { FooterComponent } from '../page-components/footer/footer.component';
import { HeaderComponent } from '../page-components/header/header.component';
import { ButtonComponent } from '../page-components/button/button.component';


@Component({
  selector: 'app-government-defense',
  standalone: true,
  imports: [HeaderComponent, 
            PageTitleComponent, 
            FooterComponent, 
            ApproachComponent, 
            ChallengeFeatureComponent, ButtonComponent],
  templateUrl: './government-defense.component.html',
  styleUrl: './government-defense.component.css'
})
export class GovernmentDefenseComponent {

}
