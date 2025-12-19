import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  imports: [CommonModule],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class Breadcrumbs {
 breadcrumbs: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadcrumbs(this.route.root);
      });
  }

  private buildBreadcrumbs(route: ActivatedRoute, result: string[] = []): string[] {
    if (route.snapshot.data['breadcrumb']) {
      result.push(route.snapshot.data['breadcrumb']);
    }

    if (route.firstChild) {
      return this.buildBreadcrumbs(route.firstChild, result);
    }

    return result;
  }
}
/**
 * BREADCRUMB NOTES
 * -------------------------------------------
 * - Breadcrumbs are built from route data
 * - Route data provides static metadata
 *
 * Flow:
 * Router events → ActivatedRoute tree → data extraction
 *
 * Benefits:
 * - Clean navigation
 * - Centralized config
 * - No hardcoded UI logic
 *
 * Interview tip:
 * - Breadcrumbs commonly use route data
 */

