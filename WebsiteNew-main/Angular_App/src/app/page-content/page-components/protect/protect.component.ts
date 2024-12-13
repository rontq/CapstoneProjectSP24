import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-protect',
  standalone: true,
  templateUrl: './protect.component.html',
  styleUrl: './protect.component.css'
  
})
export class HeroProtectComponent  {

  //@Input is used to change {{variable}} in template section. match variable name to {{varible}} to change string.

  @Input() title: string = '';  
  @Input() icon_src: string = '';
  @Input() link: string = '';

}