import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.paramMap.get('id');

    // Fake API call for demo
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({
          id,
          name: 'User ' + id,
          role: 'Developer'
        });
        observer.complete();
      }, 1000);
    });
  }
}

/**
 * ROUTE RESOLVER NOTES
 * -------------------------------------------
 * - Resolver fetches data BEFORE route loads
 * - Component waits until data is ready
 *
 * Lifecycle:
 * Guards → Resolver → Component
 *
 * Benefits:
 * - Clean UI
 * - No loading flicker
 * - Centralized data fetching
 *
 * Use cases:
 * - Detail pages
 * - Config pages
 * - Required data before view
 *
 * Interview tip:
 * - Resolver blocks navigation until resolved
 */

