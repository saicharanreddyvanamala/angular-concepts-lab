import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsDashboard } from "./forms-dashboard/forms-dashboard";
import { TdfDashboard } from "./template-driven-forms-components/tdf-dashboard/tdf-dashboard";

export const routes: Routes = [
  {
    path: '', component: FormsDashboard
  },
  {
    path:'tdf', loadChildren: () => import('./template-driven-forms-components/tdf.module').then(m => m.TdfModule)
  },
  {
    path: 'rf', loadChildren: () => import('./reactive-forms-components/reactive-forms.module').then(m => m.ReactiveFormsModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class FormsModule {}
