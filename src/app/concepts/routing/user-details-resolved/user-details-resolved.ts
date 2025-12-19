import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details-resolved',
  imports: [],
  templateUrl: './user-details-resolved.html',
  styleUrl: './user-details-resolved.scss',
})
export class UserDetailsResolved implements OnInit {
  user!: any
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user'];
  }

}
