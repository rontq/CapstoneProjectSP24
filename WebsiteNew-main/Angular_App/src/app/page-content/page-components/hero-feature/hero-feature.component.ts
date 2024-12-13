import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-feature',
  standalone: true,
  imports: [],
  templateUrl: './hero-feature.component.html',
  styleUrl: './hero-feature.component.css'
})
export class HeroFeatureComponent {

  //@Input is used to change {{variable}} in template section. match variable name to {{varible}} to change string.

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() img_src: string = '';
  @Input() link: string = '';
}
