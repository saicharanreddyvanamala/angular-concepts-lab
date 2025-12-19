import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { interval, Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'app-lifecycle-order-demo',
  imports: [],
  templateUrl: './lifecycle-order-demo.html',
  styleUrl: './lifecycle-order-demo.scss',
})
export class LifecycleOrderDemo implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @ContentChild('projectedPara') projectedElement!: ElementRef<HTMLParagraphElement>;
  @ViewChild('usernameInput') inputRef!: ElementRef<HTMLInputElement>;

  @Input() value!: number;
  prev!: number;
  items = ['A', 'B'];
  lastLength = this.items.length;
  intervalId!: Subscription

  constructor() {
    console.log('1. Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['value'];
    this.prev = change.previousValue;
    console.log(`2. ngOnChanges trigger and the previous value is: ${change.previousValue} and current value is: ${change.currentValue} `);
  }

  ngOnInit(): void {
    console.log('3. ngOnInit called after constructor and ngOnChanges if any inputs present.');
    this.items.push('C');
  }

  ngDoCheck(): void {
    if (this.items.length !== this.lastLength) {
      console.log('4. ngDoCheck triggered. Custom change detected!');
      this.lastLength = this.items.length;
    }
  }

  ngAfterContentInit() {
    console.log('5.ngAfterContentInit triggered.  Projected element:', this.projectedElement.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('6. ngAfterContentChecked triggered. Content checked');
  }

  ngAfterViewInit(): void {
    console.log('7. ngAfterViewInit triggered. viewChild reference:', this.inputRef.nativeElement);
  }

  ngAfterViewChecked() {
    console.log('8. ngAfterViewChecked triggered. View checked');
  }

  focusInput() {
    // use nativeElement to interact with DOM element safely
    this.inputRef.nativeElement.focus();
  }

  timerOn(){
    this.intervalId = interval(100).pipe(
      tap(v=> console.log('Tick: ', v)),

      take(5)
    ).subscribe();
  }


  ngOnDestroy(): void {
    console.log('9. ngOnDestroy triggerd. Cleaned up ');
    this.intervalId.unsubscribe()
  }

  /**
 * ANGULAR LIFECYCLE SUMMARY
 * -------------------------------------------
 * constructor:
 * - DI only, no logic
 *
 * ngOnInit:
 * - Initialization logic
 *
 * ngOnChanges:
 * - React to @Input changes
 *
 * ngDoCheck:
 * - Custom change detection (rare)
 *
 * ngAfterContentInit:
 * - ng-content ready
 *
 * ngAfterViewInit:
 * - ViewChild safe access
 *
 * ngOnDestroy:
 * - Cleanup subscriptions & timers
 *
 * Interview rule:
 * - ViewChild after ngAfterViewInit
 * - Cleanup in ngOnDestroy
 */

}
