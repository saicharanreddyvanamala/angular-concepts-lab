import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Home } from "./home/home";
import { About } from "./about/about";
import { Users } from "./users/users";
import { UserList } from "./user-list/user-list";
import { UserDetails } from "./user-details/user-details";
import { RoutingDashboard } from "./routing-dashboard/routing-dashboard";
import { DashboardLayout } from "./dashboard/dashboard-layout/dashboard-layout";
import { DashboardHome } from "./dashboard/dashboard-home/dashboard-home";
import { DashboardProfile } from "./dashboard/dashboard-profile/dashboard-profile";
import { DashboardSettings } from "./dashboard/dashboard-settings/dashboard-settings";
import { LoginDemo } from "./login-demo/login-demo";
import { AuthGuard } from "./auth.guard";
import { CanDeactivateDemo } from "./can-deactivate-demo/can-deactivate-demo";
import { UnsavedChangesGuard } from "./can-deactivate.guard";
import { UserDetailsResolved } from "./user-details-resolved/user-details-resolved";
import { UserResolver } from "./user.resolver";

export const routes: Routes = [
  {
    path: '', component: RoutingDashboard
  },
  {
    path: 'home', component: Home
  },
  {
    path: 'about', component:About
  },
  {
    path: 'users', component: Users
  },
  {
    path: 'users/list', component: UserList
  },
  {
    path: 'users/:id', component: UserDetails
  },
  {
    path: 'login', component: LoginDemo
  },
  {
    path: 'dashboard', component: DashboardLayout,
    data: {breadcrumb: 'Dashboard'},
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'home', component: DashboardHome,
        data: {breadcrumb: 'Home'},
      },
      {
        path: 'profile', component: DashboardProfile,
        data: {breadcrumb: 'Profile'},
      },
      {
        path: 'settings', component: DashboardSettings,
        data: {breadcrumb: 'Settings'},
      },

      //Default child route
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      }
    ]
  },
  {
    path:'can-deactivate', component: CanDeactivateDemo,
    canDeactivate: [UnsavedChangesGuard]
  },
  {
  path: 'users-resolved/:id',
  component: UserDetailsResolved,
  resolve: {
    user: UserResolver
  }
}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule{}
