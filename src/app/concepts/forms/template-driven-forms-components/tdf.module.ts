import { NgModule } from "@angular/core";
import { TemplateDrivenForm } from "./template-driven-form/template-driven-form";
import { TdfCustomValidatorsDemo } from "./tdf-custom-validators-demo/tdf-custom-validators-demo";
import { ProgrammaticAccessToTdf } from "./programmatic-access-to-tdf/programmatic-access-to-tdf";
import { RouterModule } from "@angular/router";
import { TdfDashboard } from "./tdf-dashboard/tdf-dashboard";

const ROUTES = [
  {
    path: '', component: TdfDashboard
  },
  {
    path:'template-driven-form', component: TemplateDrivenForm
  },
  {
    path:'tdf-custom-validators', component: TdfCustomValidatorsDemo
  },
  {
    path:'programmatic-access-to-tdf', component: ProgrammaticAccessToTdf
  }
]

@NgModule({
  declarations: [],
  imports:[
    RouterModule.forChild(ROUTES)
  ]
})
export class TdfModule {}
