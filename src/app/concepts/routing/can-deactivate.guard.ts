import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { canComponentDeactivate } from "./can-deactivate.interface";

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<canComponentDeactivate> {
  canDeactivate(component: canComponentDeactivate): boolean {
    return component.canDeactivate();
  }
}

/**
 * CANDEACTIVATE GUARD NOTES
 * -------------------------------------------
 * - Runs before leaving a route
 * - Used to prevent data loss
 *
 * Pattern:
 * Guard → calls component method
 *
 * Best practice:
 * - Use interface contract
 * - Keep logic in component
 *
 * Interview tip:
 * - CanDeactivate protects unsaved changes
 */

