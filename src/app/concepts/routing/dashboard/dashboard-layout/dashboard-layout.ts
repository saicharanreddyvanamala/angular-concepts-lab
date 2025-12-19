import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Breadcrumbs } from "../../breadcrumbs/breadcrumbs";

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterModule, Breadcrumbs],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss',
})
export class DashboardLayout {
/**
 * CHILD ROUTES NOTES
 * -------------------------------------------
 * - Child routes allow nested routing
 * - Used for layouts (dashboard, admin, tabs)
 *
 * Structure:
 * Parent Route → Layout Component
 * Child Routes → Render inside layout router-outlet
 *
 * Benefits:
 * - Reusable layout
 * - Clean routing structure
 * - Real-world app design
 *
 * Interview tip:
 * - Child routes render in parent's router-outlet
 */




/**
 * LAZY LOADING NOTES
 * -------------------------------------------
 * - Lazy loading loads route code on demand
 * - Implemented using loadChildren()
 *
 * Benefits:
 * - Faster initial load
 * - Smaller JS bundles
 * - Better performance
 *
 * Real-world usage:
 * - Dashboards
 * - Admin panels
 * - Large feature areas
 *
 * Interview tip:
 * - Lazy loading is a routing-level optimization
 */


/**
 * PRELOADING NOTES
 * -------------------------------------------
 * - Preloading loads lazy routes after app startup
 * - Uses PreloadAllModules
 *
 * Benefits:
 * - Faster navigation
 * - Still keeps lazy loading
 *
 * When to use:
 * - Medium to large apps
 * - Dashboard-heavy apps
 *
 * Interview tip:
 * - Preloading improves UX without hurting startup
 */

}
