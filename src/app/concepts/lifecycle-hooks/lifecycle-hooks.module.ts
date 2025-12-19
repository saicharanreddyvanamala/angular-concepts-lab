import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LifecycleHooksDashboard } from "./lifecycle-hooks-dashboard/lifecycle-hooks-dashboard";
import { ParentComponent } from "./parent-component/parent-component";

const routes: Routes = [
  {
    path: '', component: LifecycleHooksDashboard
  },
  {
    path: 'lifecycle-order', component: ParentComponent
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)]
})
export class LifecycleHooksModule {}
