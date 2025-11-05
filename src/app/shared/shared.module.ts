import { NgModule } from "@angular/core";
import { HomePage } from "./components/home-page/home-page";
import { Routes, RouterModule } from "@angular/router";

const ROUTES: Routes = [{
  path: '', component: HomePage
}]

@NgModule({
  declarations: [],
  imports: [
    HomePage,
    RouterModule.forChild(ROUTES)
  ],
})

export class SharedModule {}
