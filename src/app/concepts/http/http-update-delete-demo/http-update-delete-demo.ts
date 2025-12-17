import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../interfaces/user.model';

@Component({
  selector: 'app-http-update-delete-demo',
  imports: [FormsModule],
  templateUrl: './http-update-delete-demo.html',
  styleUrl: './http-update-delete-demo.scss',
})
export class HttpUpdateDeleteDemo {
  userId = 1;
  name = '';
  email = '';

  constructor(private http: HttpClient) {}

  // PUT - replace entire object
  updateUserPut() {
    const payload: User = {
      id: this.userId,
      name: this.name,
      email: this.email,
      username: ''
    };

    this.http.put<User>(`https://jsonplaceholder.typicode.com/users/${this.userId}`, payload).subscribe(res => {
      console.log('PUT response: ', res);
      alert('User updated using PUT');
    });
  }

  // PATCH - update partial fields
  updateUserPatch() {
    const payload: Partial<User> = {
      email: this.email
    };

    this.http.patch<User>(`https://jsonplaceholder.typicode.com/users/${this.userId}`, payload).subscribe(res => {
      console.log('PATCH response: ', res);
      alert('User updated using PATCH');
    });
  }

  // DELETE
  deleteUser() {
    this.http.delete(`https://jsonplaceholder.typicode.com/users/${this.userId}`).subscribe(() => {
      console.log('User deleted');
      alert('User deleted');
    })
  }

  /**
 * HTTP PUT / PATCH / DELETE NOTES
 * -------------------------------------------
 * PUT:
 * - Replaces entire resource
 * - Sends full object
 *
 * PATCH:
 * - Partial update
 * - Sends only changed fields
 * - Preferred in real apps
 *
 * DELETE:
 * - Removes resource
 * - Usually returns no body
 *
 * Rules:
 * - PUT/PATCH/DELETE → subscribe()
 * - HTTP observables auto-complete
 *
 * Interview tip:
 * - PATCH is safer than PUT
 */

}
