import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../interfaces/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-http-post-demo',
  imports: [FormsModule],
  templateUrl: './http-post-demo.html',
  styleUrl: './http-post-demo.scss',
})
export class HttpPostDemo {
  name = '';
  email = '';

  constructor(private http: HttpClient) {}

  createuser() {
    const payload: Partial<User> = {
      name: this.name,
      email: this.email
    };

    this.http.post<User>('https://jsonplaceholder.typicode.com/users', payload).subscribe(response => {
      console.log('User Created: ', response);
      alert('User created successfully!');
    })
  }

  /**
 * HTTP POST NOTES
 * -------------------------------------------
 * - POST is used to create data on the server
 * - HttpClient automatically:
 *   - Converts object to JSON
 *   - Sets Content-Type header
 *   - Parses JSON response
 *
 * - post<T>(url, body) returns Observable<T>
 * - HTTP observables auto-complete
 *
 * Best practice:
 * - Use subscribe() for POST (side effects)
 * - Type request & response
 *
 * Rule:
 * - GET → async pipe
 * - POST/PUT/DELETE → subscribe()
 */

}
