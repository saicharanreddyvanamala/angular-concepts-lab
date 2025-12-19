import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
 users = [
    { id: 1, name: 'Sai' },
    { id: 2, name: 'Irfan' },
    { id: 3, name: 'Charan' }
  ];
}
