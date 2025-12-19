import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-concepts-lab');
   loading = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {

      if (event instanceof NavigationStart) {
        this.loading = true;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading = false;
      }
    });
  }
}

/**
 * ROUTER EVENTS NOTES
 * -------------------------------------------
 * - Router emits navigation lifecycle events
 *
 * Common events:
 * - NavigationStart
 * - NavigationEnd
 * - NavigationCancel
 * - NavigationError
 *
 * Use cases:
 * - Global loaders
 * - Analytics
 * - Debugging
 *
 * Interview tip:
 * - Router events help track navigation state
 */
