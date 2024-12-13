import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-approach',
  standalone: true,
  imports: [],
  templateUrl: './approach.component.html',
  styleUrl: './approach.component.css'
})
export class ApproachComponent {
  // the ! after an attribute name tells the angular compiler to ignore variables that contain no intializer
  
  @Input({required: true}) link!: string; // make the link attribute for this component mandatory
  @Input() title!: string;                // the title attribute for this component
  @Input() content!: string;              // the content attribute for this component
}
