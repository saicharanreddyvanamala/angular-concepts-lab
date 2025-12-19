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

/**1. canLoad — What it is
✔ Prevents the lazy-loaded module files from even being downloaded.

This guard runs before Angular loads the lazy module itself.

👉 If canLoad returns false:

Angular will NOT download the lazy module

No components, services inside that module are accessible

User cannot load that module

⚠ BUT: canLoad does NOT block navigation if the module was already preloaded.


canLoad() Example
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  canLoad: [AuthGuard]
}

Guard
canLoad(route: Route, segments: UrlSegment[]): boolean {
  return this.authService.isAdmin(); // true/false
}

Prevents the lazy-loaded module files from even being downloaded.

This guard runs before Angular loads the lazy module itself.

👉 If canLoad returns false:

Angular will NOT download the lazy module

No components, services inside that module are accessible

User cannot load that module*/












/**2. canMatch — What it is
✔ Decides whether a route should be matched or not

before navigation happens.

This is evaluated before the router chooses which route to activate.

👉 It replaced old canLoad for most use cases.
⭐ canMatch is more flexible:

Works with lazy and non-lazy routes

Supports complex matching logic

Does NOT have the preload issue that canLoad has

📌 Example
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  canMatch: [AuthGuard]
}


Guard:

canMatch(route: Route, segments: UrlSegment[]): boolean {
  return this.authService.isAdmin();
}


If false → route is not even considered as a match.
 */






/**
 * 🔵 1. canLoad — stops loading the LAZY MODULE
✔ What it stops:

Prevents downloading the lazy module’s JS bundle

User will NOT see the component

User WILL STILL navigate to the URL, but Angular has no component to load, so blank screen or no change happens.

❌ Navigation tries to go
❌ but module is never loaded → blank screen
✔ Good for security: prevents downloading unauthorized modules
Example behavior:

User is NOT admin

Goes to: /admin

URL may change → BUT component is NOT shown

Lazy module not downloaded

Screen shows nothing

✔ You understood this correctly.

🔴 2. canMatch — stops MATCHING the route itself
✔ What it stops:

Angular does NOT match that route

Navigation is NOT allowed

Angular will find another matching route (fallback/404)

URL does NOT change to the restricted route

❌ Route is never matched
❌ Angular does NOT activate the route
❌ User cannot enter the URL
✔ Recommended guard for Angular 15+
Example behavior:

User is NOT admin

Tries to go /admin

Angular says: “this route does not exist for you”

Redirects to /login or /home

💥 No blank screen. Clean redirect.
 */

















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
