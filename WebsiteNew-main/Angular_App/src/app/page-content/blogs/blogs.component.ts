import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { HeaderComponent } from '../page-components/header/header.component';
import { PageTitleComponent } from '../page-components/page-title/page-title.component';
import { FooterComponent } from '../page-components/footer/footer.component';

import { BlogsApiService } from '../../services/api/blogs-api.service'
import { BlogPost } from '../../models/blog-post.model'

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    HttpClientModule,
    
    HeaderComponent,
    PageTitleComponent,
    FooterComponent
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  
  constructor(private blogsApiService: BlogsApiService) {}
  
    /**
   * Initializes the component by fetching blog posts from the API.
   *
   * @return {void} No return value.
   */
  ngOnInit() {
    this.blogsApiService.getBlogPosts().subscribe(posts => {
      this.blogPosts = posts;
    });
  }
}