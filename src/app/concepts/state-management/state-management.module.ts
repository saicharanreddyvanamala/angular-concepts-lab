import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignalsDemo } from "./signals-demo/signals-demo";
import { StateManagementDashboard } from "./state-management-dashboard/state-management-dashboard";
import { SignalParent } from "./signal-parent/signal-parent";
import { IfForWithSignalsDemo } from "./if-for-with-signals-demo/if-for-with-signals-demo";
import { SignalIoDemoParent } from "./signal-io-demo-parent/signal-io-demo-parent";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: StateManagementDashboard
  },
  {
    path: 'signals', component: SignalsDemo
  },
  {
    path: 'input-model-signals', component: SignalParent
  },
  {
    path: 'if-for-with-signals', component: IfForWithSignalsDemo
  },
  {
    path: 'signal-io-change-demo', component: SignalIoDemoParent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class StateManagementModule {}
