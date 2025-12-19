import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})
export class UserDetails implements OnInit {
 userId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id')!;
    });
  }
  /**
 * ROUTE PARAMS NOTES
 * -------------------------------------------
 * Route params allow dynamic URLs like /users/:id
 *
 * Ways to read params:
 * 1. snapshot → one-time read
 * 2. paramMap observable → reacts to changes
 *
 * Best practice:
 * - Use paramMap observable
 * - snapshot only for static routes
 *
 * Interview tip:
 * - snapshot does NOT update on route reuse
 */

}
