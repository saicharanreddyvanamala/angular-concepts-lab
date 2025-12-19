import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-routing-dashboard',
  imports: [RouterModule],
  templateUrl: './routing-dashboard.html',
  styleUrl: './routing-dashboard.scss',
})
export class RoutingDashboard {
/**
 * ROUTING CORE NOTES
 * -------------------------------------------
 * pathMatch:
 * - 'full' → exact match
 * - 'prefix' → default behavior
 *
 * redirectTo:
 * - Used for default and child redirects
 *
 * ActivatedRoute:
 * - Gives access to params, query params, data
 * - Prefer observables over snapshot
 *
 * Route data:
 * - Static metadata attached to route
 * - Used for titles, roles, breadcrumbs
 *
 * Important rules:
 * - Specific routes before dynamic ones
 * - Redirect routes need pathMatch: 'full'
 */

}
