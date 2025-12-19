import { Injectable } from "@angular/core";
import {  CanActivate, CanActivateChild, Router} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    return this.checkAuth();
  }

  canActivateChild(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['routing/login'])
    return false;
  }
}

// Other types of canActivate

// import { Router } from '@angular/router';

// canActivate(): boolean | UrlTree {
//   if (this.auth.isAuthenticated()) {
//     return true;
//   }

//   return this.router.createUrlTree(['/routing/login']);
// }



// canActivate(): Observable<boolean | UrlTree> {
//   return this.auth.isLoggedIn$.pipe(
//     map(isLoggedIn =>
//       isLoggedIn
//         ? true
//         : this.router.createUrlTree(['/routing/login'])
//     )
//   );
// }


/**
 * AUTH GUARD NOTES
 * -------------------------------------------
 * - CanActivate runs before route loads
 * - Used to protect routes (auth / permissions)
 *
 * Flow:
 * URL → Guard → Allow or Redirect
 *
 * Best practice:
 * - Keep guard thin
 * - Delegate logic to AuthService
 *
 * Interview tip:
 * - Guards prevent component creation
 */

/**
 * CANACTIVATE GUARD NOTES
 * -------------------------------------------
 * - Runs BEFORE route activation
 * - Used for auth & permissions
 *
 * Return values:
 * - true → allow navigation
 * - false → block navigation
 * - UrlTree → redirect
 *
 * Best practice:
 * - Keep guards small
 * - Use services for logic
 *
 * Interview tip:
 * - Guards run before component creation
 */

/**
 * ROUTE GUARDS NOTES
 * -------------------------------------------
 * CanActivate:
 * - Runs before entering a route
 *
 * CanActivateChild:
 * - Runs before entering child routes
 * - Ideal for layouts / dashboards
 *
 * Return types:
 * - boolean → allow / block
 * - UrlTree → redirect (preferred)
 * - Observable / Promise → async guards
 *
 * Best practices:
 * - Keep guards simple
 * - Use services for logic
 * - Prefer UrlTree over navigate()
 *
 * Interview tip:
 * - CanActivateChild protects nested routes
 */
