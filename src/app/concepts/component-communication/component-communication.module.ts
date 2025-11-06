import { NgModule } from "@angular/core";
import { ParentComponent } from "./components/parent-component/parent-component";
import { ChildComponent } from "./components/child-component/child-component";
import { Routes, RouterModule } from "@angular/router";

const ROUTES: Routes = [{
  path: '', component: ParentComponent
}]

@NgModule({
  declarations: [],
  imports: [
    ParentComponent,
    ChildComponent,
    RouterModule.forChild(ROUTES)
  ]
})
export class ComponentCommunication {}
