import { NgModule } from "@angular/core";
import { BindingDemoComponent } from "./components/binding-demo-component/binding-demo-component";
import { Routes, RouterModule } from "@angular/router";

const ROUTES: Routes = [{
  path: '', component: BindingDemoComponent
}]

@NgModule({
  declarations: [],
  imports: [
    BindingDemoComponent,
    RouterModule.forChild(ROUTES)
  ],
})

export class BasicsModule {}
