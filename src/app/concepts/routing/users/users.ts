import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterModule, CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  page!: string | null;

    constructor(
      private route: ActivatedRoute,
      private router: Router
    ) {}

    ngOnInit() {
      this.route.queryParamMap.subscribe(params => {
        this.page = params.get('page');
      });
    }

    goToPage(page: number) {
      this.router.navigate([], {
        queryParams: { page },
        queryParamsHandling: 'merge'
      });
    }

    /**
 * QUERY PARAMS NOTES
 * -------------------------------------------
 * Query params modify how data is displayed
 * Example: /users?page=1&sort=asc
 *
 * Ways to read:
 * - snapshot.queryParamMap → one-time
 * - queryParamMap observable → reacts to changes
 *
 * Best practice:
 * - Use observable approach
 *
 * Navigation:
 * - queryParams → set params
 * - queryParamsHandling → preserve / merge
 *
 * Interview tip:
 * - Route params = identity
 * - Query params = view state
 */

}
