import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BuiltInPipesDemo } from "./built-in-pipes-demo/built-in-pipes-demo";

const ROUTES: Routes = [
  {
    path : 'built-in-pipes-demo', component: BuiltInPipesDemo
  }
  ]

@NgModule({
  declarations: [],
  imports: [
    BuiltInPipesDemo,
    RouterModule.forChild(ROUTES)
  ]
})
export class PipesModule {}
