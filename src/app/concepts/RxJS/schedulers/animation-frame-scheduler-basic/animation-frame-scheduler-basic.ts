import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { animationFrameScheduler, interval, observeOn, take } from 'rxjs';

@Component({
  selector: 'app-animation-frame-scheduler-basic',
  imports: [CommonModule],
  templateUrl: './animation-frame-scheduler-basic.html',
  styleUrl: './animation-frame-scheduler-basic.scss',
})
export class AnimationFrameSchedulerBasic implements OnInit {

  progress = 0;

  ngOnInit(): void {

    interval(0)
      .pipe(
        observeOn(animationFrameScheduler),
        take(100)
      )
      .subscribe(v => {
        this.progress = v + 1; // 1 to 100%
      });
  }

  /**
 * animationFrameScheduler
 * ------------------------------------------------------------
 * - Schedules work to run right before the next browser repaint.
 * - Uses requestAnimationFrame() internally.
 *
 * Behavior:
 * - Aligns RxJS emissions with the screen's refresh rate (≈ 60 FPS).
 * - Prevents UI lag during high-frequency events (scroll, mousemove).
 *
 * Use Cases:
 *  - Smooth progress bars or loading indicators.
 *  - Canvas / SVG animations.
 *  - Virtual scrolling and large list rendering.
 *  - Animated transitions with RxJS.
 *  - High-frequency UI events (drag/resize/scroll).
 *
 * Comparison:
 *  - asyncScheduler → macrotask (slower).
 *  - asapScheduler → microtask (fast).
 *  - animationFrameScheduler → next repaint.
 *
 * Best when updating the DOM repeatedly and smoothly.
 */

}
