import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-solution',
  standalone: true,
  imports:[
            RouterModule
          ],
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.css'

})
export class SolutionFeatureComponent  {

  //@Input is used to change {{variable}} in template section. match variable name to {{varible}} to change string.

  @Input() title: string = '';  
  @Input() description: string = '';
  @Input() num_label: string = '';
  @Input() link: string = '';

}