import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-get-demo',
  imports: [CommonModule],
  templateUrl: './http-get-demo.html',
  styleUrl: './http-get-demo.scss',
})
export class HttpGetDemo implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(response => {
      this.users = response;
    });
  }

  /**
 * HTTP GET – BASIC NOTES
 * --------------------------------------------------
 * HttpClient is Angular's service for HTTP communication.
 *
 * - http.get<T>() returns an Observable<T>
 * - HTTP request starts only when subscribed
 * - HTTP observables complete automatically
 * - No need to unsubscribe for normal HTTP calls
 *
 * Why Observable?
 * - Cancellation support
 * - Interceptors
 * - RxJS operators
 *
 * Best practice:
 * - Call HTTP in ngOnInit
 * - Assign response to component state
 */

}
