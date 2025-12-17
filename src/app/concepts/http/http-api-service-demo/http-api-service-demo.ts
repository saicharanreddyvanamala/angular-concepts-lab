import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.model';
import { UserApiService } from '../user-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserApiCachingService } from '../user-api-caching.service';

@Component({
  selector: 'app-http-api-service-demo',
  imports: [CommonModule, FormsModule],
  templateUrl: './http-api-service-demo.html',
  styleUrl: './http-api-service-demo.scss',
})
export class HttpApiServiceDemo {
  users$!: Observable<User[]>; // For displaying all users
  selectedUser$!: Observable<User>; // For showing user by ID

  //Form models
  newUser = {
    name: '',
    email: ''
  }

  updateUserModel = {
    id: 1,
    name: '',
    email: ''
  };

  userIdToFetch = 1;
  deleteUserId = 1;

  constructor(private userApi: UserApiService) {}
  // constructor(private userApi: UserApiService, private userApi2: UserApiCachingService) {}
  // This is just a example to show that when we click the button the same get call is calle dbut the api will return the cached data
  //  so the network call will not happen after the first time
  // // GET ALL USERS
  // loadAllUsers(){
  //   this.users$ = this.userApi2.getUsers();
  // }

  //  loadAllUsers2(){
  //   this.users$ = this.userApi2.getUsers();
  // }

  // GET ALL USERS
  loadAllUsers(){
    this.users$ = this.userApi.getUsers();
  }

   loadAllUsers2(){
    this.users$ = this.userApi.getUsers();
  }

  //GET USER BY ID
  loadUserById() {
    this.selectedUser$ = this.userApi.getUserById(this.userIdToFetch);
  }

  // CREATE USER
  createUser() {
    this.userApi.createUser(this.newUser).subscribe({
      next: res => console.log('User Created:', res),
      error: err => console.error('Error:', err)
    });
  }

  // UPDATE USER
  updateUser() {
    this.userApi.updateUser(this.updateUserModel.id, this.updateUserModel).subscribe({
      next: res => console.log('User Updated: ', res),
      error: err => console.log('Error: ', err)
    });
  }

  // DELETE USER
  deleteUser() {
    this.userApi.deleteUser(this.deleteUserId).subscribe({
      next: () => console.log(`User ${this.deleteUserId} deleted`),
      error: err => console.log('Error', err)
    })
  }


  /**
 * API SERVICE LAYER NOTES
 * -------------------------------------------
 * - Components should NOT directly use HttpClient
 * - Services act as the API communication layer
 *
 * Benefits:
 * - Separation of concerns
 * - Cleaner components
 * - Reusable logic
 * - Easy testing
 *
 * Best practice:
 * - One service per domain (UserApiService, AuthApiService)
 * - Keep HTTP logic out of components
 */

}
