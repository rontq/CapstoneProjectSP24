import { Component } from '@angular/core';
import { NavItemComponent } from './nav-item/nav-item.component';
import { ButtonComponent } from '../../button/button.component';
@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [NavItemComponent,
            ButtonComponent
          ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {

}
