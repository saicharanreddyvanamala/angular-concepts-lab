import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RxjsDashboard } from "./rxjs-dashboard/rxjs-dashboard";
import { ObservableBasic } from "./observable-basic/observable-basic";
import { OfFromIntervalTimer } from "./of-from-interval-timer/of-from-interval-timer";
import { MapFilterBasic } from "./map-filter-basic/map-filter-basic";
import { TapBasic } from "./tap-basic/tap-basic";
import { TakeBasic } from "./take-basic/take-basic";
import { ColdHotDemo } from "./cold-hot-demo/cold-hot-demo";
import { SyncAsyncBasic } from "./sync-async-basic/sync-async-basic";
import { FirstLastBasic } from "./first-last-basic/first-last-basic";
import { DebounceBasic } from "./debounce-basic/debounce-basic";
import { DistinctBasic } from "./distinct-basic/distinct-basic";
import { ThrottleTimeBasic } from "./throttle-time-basic/throttle-time-basic";
import { SwitchMapBasic } from "./switch-map-basic/switch-map-basic";
import { MergeMapBasic } from "./merge-map-basic/merge-map-basic";
import { ConcatMapBasic } from "./concat-map-basic/concat-map-basic";
import { ExhaustMapBasic } from "./exhaust-map-basic/exhaust-map-basic";
import { ForkjoinBasic } from "./forkjoin-basic/forkjoin-basic";
import { CombinelatestBasic } from "./combinelatest-basic/combinelatest-basic";
import { WithlatestfromBasic } from "./withlatestfrom-basic/withlatestfrom-basic";

const ROUTES: Routes = [
  {
    path: '', component: RxjsDashboard
  },
  {
    path: 'observable-basic', component: ObservableBasic
  },
  {
    path: 'of-from-interval-timer', component: OfFromIntervalTimer
  },
  {
    path: 'map-filter-basic', component: MapFilterBasic
  },
  {
    path: 'tap-basic', component: TapBasic
  },
  {
    path: 'take-basic', component: TakeBasic
  },
  {
    path:'cold-hot', component: ColdHotDemo
  },
  {
    path: 'sync-async', component: SyncAsyncBasic
  },
  {
    path: 'first-last', component: FirstLastBasic
  },
  {
    path: 'debounce-time', component: DebounceBasic
  },
  {
    path: 'distinct-until-changed', component: DistinctBasic
  },
  {
    path: 'throttle', component: ThrottleTimeBasic
  },
  {
    path: 'switch-map', component: SwitchMapBasic
  },
  {
    path: 'merge-map', component: MergeMapBasic
  },
  {
    path: 'concat-map', component: ConcatMapBasic
  },
  {
    path: 'exhaust-map', component: ExhaustMapBasic
  },
  {
    path: 'fork-join', component: ForkjoinBasic
  },
  {
    path: 'combinelatest', component: CombinelatestBasic
  },
  {
    path: 'withlatestfrom', component: WithlatestfromBasic
  }
]

@NgModule({
  providers:[],
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class RxJSMOdule {}
