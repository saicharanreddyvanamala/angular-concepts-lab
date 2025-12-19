import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CdDashboard } from "./cd-dashboard/cd-dashboard";
import { DefaultCdDemo } from "./default-cd-demo/default-cd-demo";
import { CdOnpushParent } from "./cd-onpush-parent/cd-onpush-parent";

const routes: Routes = [
  {
    path: '', component: CdDashboard
  },
  {
    path: 'default-cd', component: DefaultCdDemo
  },
  {
    path: 'cd-onpush', component: CdOnpushParent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ChangeDetectionModule {}
