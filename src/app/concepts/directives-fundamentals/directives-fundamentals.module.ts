import { NgModule } from "@angular/core";
import { DirectivesDemo } from "./directives-demo/directives-demo";
import { Routes, RouterModule } from "@angular/router";
import { ForExperimentComponent } from "./for-experiment/for-experiment.component/for-experiment.component";
import { TemplateDemoComponent } from "./template-demo-component/template-demo-component";

const ROUTES: Routes = [
  { path: '', component: DirectivesDemo },
  { path: 'for-experiment', component: ForExperimentComponent },
  {path: 'template-demo', component: TemplateDemoComponent}
]

@NgModule({
  declarations: [],
  imports: [
    DirectivesDemo,
    RouterModule.forChild(ROUTES)
  ]
})
export class DirectivesFundamentals {}
