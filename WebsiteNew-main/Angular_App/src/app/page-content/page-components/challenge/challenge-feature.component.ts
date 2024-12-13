import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-challenge-feature',
  standalone: true,
  templateUrl: './challenge-feature.component.html',
  styleUrl: './challenge-feature.component.css'
  
})
export class ChallengeFeatureComponent  {

  //@Input is used to change {{variable}} in template section. match variable name to {{varible}} to change string.

  @Input() title: string = '';  
  @Input() description: string = '';
  @Input() img_src: string = '';
  @Input() link: string = '';

}