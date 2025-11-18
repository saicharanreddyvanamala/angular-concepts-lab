import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BuiltInPipesDemo } from "./built-in-pipes-demo/built-in-pipes-demo";
import { PipesDashboard } from "./pipes-dashboard/pipes-dashboard";
import { CustomPipesDemo } from "./custom-pipes-demo/custom-pipes-demo";
import { PureVsImpureDemo } from "./pure-vs-impure-demo/pure-vs-impure-demo";
import { AsyncPipeDemo } from "./async-pipe-demo/async-pipe-demo";
import { ReactivePipeDemo } from "./reactive-pipe-demo/reactive-pipe-demo";
import { JsonAndKeyValuePipesDemo } from "./json-and-key-value-pipes-demo/json-and-key-value-pipes-demo";

const ROUTES: Routes = [
  {
    path: '', component: PipesDashboard
  },
  {
    path : 'built-in', component: BuiltInPipesDemo
  },
  {
    path: 'custom', component: CustomPipesDemo
  },
  {
    path: 'pure-and-impure', component: PureVsImpureDemo
  },
  {
    path: 'async-pipe', component: AsyncPipeDemo
  },
  {
    path: 'reactive-pipe', component: ReactivePipeDemo
  },
  {
    path: 'json-keyvalue-pipes', component: JsonAndKeyValuePipesDemo
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
