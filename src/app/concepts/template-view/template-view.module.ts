import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgContainerDemo } from "./ng-container/ng-container-demo/ng-container-demo";
import { TemplateView } from "./template-view/template-view";
import { CardParent } from "./ng-content/card-parent/card-parent";
import { TemplateContextDemo } from "./template-context-demo/template-context-demo";
import { TemplateOutletContextDemo } from "./ng-template-outlet/template-outlet-context-demo/template-outlet-context-demo";
import { ViewContainerRefDemo } from "./view-container-ref-demo/view-container-ref-demo";
import { ViewChildDemo } from "./view-queries/view-child-demo/view-child-demo";
import { ContentChildDemoParent } from "./content-queries/content-child-demo-parent/content-child-demo-parent";
import { ViewChildrenDemo } from "./view-queries/view-children-demo/view-children-demo";
import { ContentChildrenDemoParent } from "./content-queries/content-children-demo-parent/content-children-demo-parent";
import { TemplateArchitectureDemo } from "./template-driven-component-architecture/template-architecture-demo/template-architecture-demo";
import { DynamicTabsDemo } from "./ng-template-outlet/dynamic-tabs-demo/dynamic-tabs-demo";

const ROUTES: Routes = [
  {
    path: '', component: TemplateView
  },
  {
    path: 'ng-container', component: NgContainerDemo
  },
  {
    path:'ng-content', component: CardParent
  },
  {
    path:'template-context', component: TemplateContextDemo
  },
  {
    path: 'ng-template-outlet-demo', component: TemplateOutletContextDemo
  },
  {
    path: 'dynamic-tabs-ng-templtae-outlet', component: DynamicTabsDemo
  },
  {
    path: 'view-container-ref', component: ViewContainerRefDemo
  },
  {
    path: 'view-child', component: ViewChildDemo
  },
  {
    path: 'content-child', component: ContentChildDemoParent
  },
  {
    path: 'view-children', component: ViewChildrenDemo
  },
  {
    path: 'content-children', component: ContentChildrenDemoParent
  },
  {
    path: 'template-driven-architecture', component: TemplateArchitectureDemo
  }
]

@NgModule({
  declarations: [],
  imports: [
    NgContainerDemo,
    RouterModule.forChild(ROUTES)
  ]
})
export class TemplateViewModule {}
