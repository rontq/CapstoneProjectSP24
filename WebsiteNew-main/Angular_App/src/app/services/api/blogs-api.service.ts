import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogPost } from '../../models/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsApiService {
  private apiUrl = '../../assets/data/temp_blogs_data.json'; // Change this to your actual API URL

  constructor(private http: HttpClient) { }
  
    /**
   * Retrieves a list of blog posts from the API.
   *
   * @return {Observable<BlogPost[]>} An observable containing an array of blog posts.
   */
  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.apiUrl);
  }

    /**
   * Retrieves the last three blog posts from the API.
   *
   * @return {Observable<BlogPost[]>} An observable containing an array of the last three blog posts.
   */
  getLastThreeBlogs(): Observable<BlogPost[]> {
    return this.getBlogPosts().pipe(
      map((blogs: BlogPost[]) => blogs.slice(-3)) // Ensure proper typing
    );
  }
}
