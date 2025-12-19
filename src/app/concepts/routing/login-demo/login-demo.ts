import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-demo',
  imports: [],
  templateUrl: './login-demo.html',
  styleUrl: './login-demo.scss',
})
export class LoginDemo {
  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute){}

  login() {
    this.auth.login();
    this.router.navigate(['dashboard'], {
    relativeTo: this.route.parent
  });
  }
}

/**
 * ROUTER NAVIGATION NOTES
 * -------------------------------------------
 * Absolute navigation:
 * - Starts from app root
 * - Uses leading '/'
 *
 * Relative navigation:
 * - Depends on ActivatedRoute
 * - Useful inside feature modules
 *
 * Common bug:
 * - Using absolute path without full route prefix
 */

