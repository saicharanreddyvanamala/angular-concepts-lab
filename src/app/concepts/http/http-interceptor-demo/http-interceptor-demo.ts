import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-interceptor-demo',
  imports: [CommonModule],
  templateUrl: './http-interceptor-demo.html',
  styleUrl: './http-interceptor-demo.scss',
})
export class HttpInterceptorDemo {
  users: any;

  constructor(private http: HttpClient) {}

  loadUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res => {
      this.users = res
    })
  }
}


// If we use the class based interceptors we needs to declare the provider like this in app.config.ts
// providers: [
//   {
//     provide: HTTP_INTERCEPTORS,
//     useClass: AuthInterceptor,
//     multi: true
//   },
//   {
//     provide: HTTP_INTERCEPTORS,
//     useClass: LoggingInterceptor,
//     multi: true
//   }
// ]


/**
 * HTTP ERROR HANDLING NOTES
 * -------------------------------------------
 * - HttpClient emits errors via Observable error channel
 * - try/catch does NOT work for HTTP
 *
 * catchError():
 * - Intercepts HTTP errors
 * - Must return a new Observable
 *
 * Common patterns:
 * - return of([]) → fallback value
 * - rethrow error → global handler
 *
 * Best practice:
 * - Handle UI-safe errors in component
 * - Handle auth/server errors in interceptor
 */
