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
import { SubjectBasic } from "./subjects/subject-basic/subject-basic";
import { BehaviorSubjectBasic } from "./subjects/behavior-subject-basic/behavior-subject-basic";
import { ReplaySubjectBasic } from "./subjects/replay-subject-basic/replay-subject-basic";
import { AsyncSubjectBasic } from "./subjects/async-subject-basic/async-subject-basic";
import { ShareReplayBasic } from "./subjects/share-replay-basic/share-replay-basic";
import { DestroyPattern } from "./subjects/destroy-pattern/destroy-pattern";
import { StartWithBasic } from "./start-with-basic/start-with-basic";
import { EndWithBasic } from "./end-with-basic/end-with-basic";
import { PairwiseBasic } from "./pairwise-basic/pairwise-basic";
import { ScanBasic } from "./scan-basic/scan-basic";
import { ReduceBasic } from "./reduce-basic/reduce-basic";
import { TakeuntilCancelHttp } from "./takeuntil-cancel-http/takeuntil-cancel-http";
import { TakewhileBasic } from "./takewhile-basic/takewhile-basic";
import { BufferBasic } from "./buffer-operators/buffer-basic/buffer-basic";
import { BuffercountBasic } from "./buffer-operators/buffercount-basic/buffercount-basic";
import { BuffertimeBasic } from "./buffer-operators/buffertime-basic/buffertime-basic";
import { BuffertoggleBasic } from "./buffer-operators/buffertoggle-basic/buffertoggle-basic";
import { BufferWhenBasic } from "./buffer-operators/buffer-when-basic/buffer-when-basic";
import { SkipBasic } from "./skip/skip-basic/skip-basic";
import { SkipWhileBasic } from "./skip/skip-while-basic/skip-while-basic";
import { SkipUntilBasic } from "./skip/skip-until-basic/skip-until-basic";
import { SampleBasic } from "./sample/sample-basic/sample-basic";
import { SampleTimeBasic } from "./sample/sample-time-basic/sample-time-basic";
import { AuditTimeBasic } from "./sample/audit-time-basic/audit-time-basic";
import { TimeIntervalBasic } from "./time-interval-basic/time-interval-basic";
import { TimeStampBasic } from "./time-stamp-basic/time-stamp-basic";
import { DelayBasic } from "./delay-basic/delay-basic";
import { DelayWhenBasic } from "./delay-when-basic/delay-when-basic";
import { MaterializeBasic } from "./materialize-basic/materialize-basic";
import { DematerializeBasic } from "./dematerialize-basic/dematerialize-basic";
import { TimeoutBasic } from "./timeout-basic/timeout-basic";
import { CatchErrorBasic } from "./error/catch-error-basic/catch-error-basic";
import { RetryBasic } from "./error/retry-basic/retry-basic";
import { RetryWhenBasic } from "./error/retry-when-basic/retry-when-basic";
import { ThrowErrorBasic } from "./error/throw-error-basic/throw-error-basic";
import { FinalizeBasic } from "./error/finalize-basic/finalize-basic";
import { ZipBasic } from "./zip-basic/zip-basic";
import { RaceBasic } from "./race-basic/race-basic";
import { MergeBasic } from "./merge-basic/merge-basic";
import { ConcatBasic } from "./concat-basic/concat-basic";
import { CombineLatestWithBasic } from "./combine-latest-with-basic/combine-latest-with-basic";
import { AsyncSchedulerBasic } from "./schedulers/async-scheduler-basic/async-scheduler-basic";
import { QueueSchedulerBasic } from "./schedulers/queue-scheduler-basic/queue-scheduler-basic";
import { AsapSchedulerBasic } from "./schedulers/asap-scheduler-basic/asap-scheduler-basic";
import { AnimationFrameSchedulerBasic } from "./schedulers/animation-frame-scheduler-basic/animation-frame-scheduler-basic";

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
  },
  {
    path: 'subject', component: SubjectBasic
  },
  {
    path: 'behavior-subject', component: BehaviorSubjectBasic
  },
  {
    path: 'replay-subject', component: ReplaySubjectBasic
  },
  {
    path: 'async-subject', component: AsyncSubjectBasic
  },
  {
    path: 'share-replay', component: ShareReplayBasic
  },
  {
    path: 'destroy-pattern', component: DestroyPattern
  },
  {
    path: 'start-with', component: StartWithBasic
  },
  {
    path: 'end-with', component: EndWithBasic
  },
  {
    path: 'pair-wise', component: PairwiseBasic
  },
  {
    path: 'scan',component: ScanBasic
  },
  {
    path: 'reduce', component: ReduceBasic
  },
  {
    path: 'takeuntil-cancel-http', component: TakeuntilCancelHttp
  },
  {
    path: 'take-while', component: TakewhileBasic
  },
  {
    path: 'buffer', component: BufferBasic
  },
  {
    path: 'buffer-count', component: BuffercountBasic
  },
  {
    path: 'buffer-time', component: BuffertimeBasic
  },
  {
    path: 'buffer-toggle', component: BuffertoggleBasic
  },
  {
    path: 'buffer-when', component: BufferWhenBasic
  },
  {
    path: 'skip', component: SkipBasic
  },
  {
    path: 'skip-while', component: SkipWhileBasic
  },
  {
    path: 'skip-until', component: SkipUntilBasic
  },
  {
    path: 'sample', component: SampleBasic
  },
  {
    path: 'sample-time', component: SampleTimeBasic
  },
  {
    path: 'audit-time', component: AuditTimeBasic
  },
  {
    path: 'time-interval', component: TimeIntervalBasic
  },
  {
    path: 'time-stamp', component: TimeStampBasic
  },
  {
    path: 'delay', component: DelayBasic
  },
  {
    path: 'delay-when', component: DelayWhenBasic
  },
  {
    path: 'materialize', component: MaterializeBasic
  },
  {
    path: 'dematerialize', component: DematerializeBasic
  },
  {
    path: 'timeout', component: TimeoutBasic
  },
  {
    path: 'catch-error', component: CatchErrorBasic
  },
  {
    path: 'retry', component: RetryBasic
  },
  {
    path: 'retry-when', component: RetryWhenBasic
  },
  {
    path: 'throw-error', component: ThrowErrorBasic
  },
  {
    path: 'finalize', component: FinalizeBasic
  },
  {
    path: 'zip', component: ZipBasic
  },
  {
    path: 'race', component: RaceBasic
  },
  {
    path: 'merge', component: MergeBasic
  },
  {
    path: 'concat', component: ConcatBasic
  },
  {
    path: 'combine-latest-with', component: CombineLatestWithBasic
  },
  {
    path: 'async-scheduler', component: AsyncSchedulerBasic
  },
  {
    path: 'queue-scheduler', component: QueueSchedulerBasic
  },
  {
    path: 'asap-scheduler', component: AsapSchedulerBasic
  },
  {
    path: 'animation-frame-scheduler', component: AnimationFrameSchedulerBasic
  }
]

@NgModule({
  providers:[],
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class RxJSMOdule {}
