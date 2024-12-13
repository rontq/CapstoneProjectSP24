import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {
  @Input({required: true}) url!: string; //Makes the path mandatory for the component

  @Input() isDropdown: boolean=false; //Each nav-item is determined to not be a dropdown by default
  @Input() navHrefs!: string[]; //This will specify the href of the element
  @Input() navText!: string[]; //Text shown to users on the site
}