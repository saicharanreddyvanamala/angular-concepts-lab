import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http-typed-get-demo',
  imports: [CommonModule],
  templateUrl: './http-typed-get-demo.html',
  styleUrl: './http-typed-get-demo.scss',
})
export class HttpTypedGetDemo implements OnInit {
  users: User[] = [];
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(users => {
      this.users = users;
    })
  }

  /**
 * HTTP RESPONSE TYPING NOTES
 * ----------------------------------------------
 * - Always type HTTP responses using interfaces
 * - HttpClient.get<T>() tells TypeScript what shape
 *   the backend response should have
 *
 * Important:
 * - TypeScript typing is compile-time only
 * - Angular does NOT validate runtime JSON
 *
 * Benefits:
 * - Auto-complete
 * - Compile-time safety
 * - Cleaner code
 * - Interview best practice
 *
 * Bad practice:
 * - Using `any` in HTTP calls
 */

}
