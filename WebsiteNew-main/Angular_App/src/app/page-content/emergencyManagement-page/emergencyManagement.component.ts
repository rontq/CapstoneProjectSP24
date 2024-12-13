import { Component } from '@angular/core';
import { HeaderComponent } from '../page-components/header/header.component';
import { PageTitleComponent } from '../page-components/page-title/page-title.component';
import { FooterComponent } from '../page-components/footer/footer.component';

@Component({
  selector: 'page-logistics',
  standalone: true,
  imports:[HeaderComponent, 
           PageTitleComponent, 
           FooterComponent
          ],
  templateUrl: './emergencyManagement.component.html',
  styleUrl: './emergencyManagement.component.css'
  
})
export class EmergencyManagementPage  {
    title = "hero";
}