import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DiDashboard } from "./di-dashboard/di-dashboard";
import { DiBasicDemo } from "./di-basic-demo/di-basic-demo";
import { ProvidersInjectorHeirarchyParentDemo } from "./providers-injector-heirarchy-parent-demo/providers-injector-heirarchy-parent-demo";
import { UseClassDemo } from "./providers-config-types/use-class-demo/use-class-demo";
import { UseValueDemo } from "./providers-config-types/use-value-demo/use-value-demo";
import { UseExistingDemo } from "./providers-config-types/use-existing-demo/use-existing-demo";
import { UseFactoryDemo } from "./providers-config-types/use-factory-demo/use-factory-demo";
import { MultiProviderDemo } from "./providers-config-types/multi-provider-demo/multi-provider-demo";

const routes: Routes = [
  {
    path: '', pathMatch:'full', component: DiDashboard
  },
  {
    path: 'di-basic', component: DiBasicDemo
  },
  {
    path: 'injector-heirarchy', component: ProvidersInjectorHeirarchyParentDemo
  },
  {
    path: 'use-class', component: UseClassDemo
  },
  {
    path: 'use-value', component: UseValueDemo
  },
  {
    path: 'use-existing', component: UseExistingDemo
  },
  {
    path: 'use-factory', component: UseFactoryDemo
  },
  {
    path: 'multi-provider', component: MultiProviderDemo
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DependencyInjectionModule {}
