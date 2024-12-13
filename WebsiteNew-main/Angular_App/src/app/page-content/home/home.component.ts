import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { HeaderComponent } from '../page-components/header/header.component';
import { ButtonComponent } from '../page-components/button/button.component';
import { FooterComponent } from '../page-components/footer/footer.component';
import { ApproachComponent } from '../page-components/approach/approach.component';
import { HeroFeatureComponent } from '../page-components/hero-feature/hero-feature.component';
import { ChallengeFeatureComponent } from '../page-components/challenge/challenge-feature.component';
import { HeroProtectComponent } from '../page-components/protect/protect.component';
import { SolutionFeatureComponent } from '../page-components/solution/solution.component';
import { FormComponent } from '../page-components/form/form.component';

import { BlogsApiService } from '../../services/api/blogs-api.service'
import { BlogPost } from '../../models/blog-post.model'

//Author: Kyle Anthony Mateo Lao
//Date: 4/10/24
//Purpose: Creates the Home web page's TypeScript file. Contains all of the importation of page-components components and other components
//Uses home.component.html as base html (like index.html) and uses home.component.css
//Revision History: Added header comments 4/10/24
//Notes:  


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
            CommonModule,
            RouterModule,
            HttpClientModule,
            HeaderComponent, 
            FooterComponent, 
            ButtonComponent, 
            ApproachComponent,
            HeroFeatureComponent,
            HeroProtectComponent,
            ChallengeFeatureComponent,
            SolutionFeatureComponent,
            FormComponent
          ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  latestBlogs: BlogPost[] = [];

    constructor(private blogsService: BlogsApiService) {}

    ngOnInit() {
        this.blogsService.getLastThreeBlogs().subscribe(blogs => {
            this.latestBlogs = blogs;
        });
    }
}
