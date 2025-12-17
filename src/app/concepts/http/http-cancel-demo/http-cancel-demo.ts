import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-http-cancel-demo',
  imports: [],
  templateUrl: './http-cancel-demo.html',
  styleUrl: './http-cancel-demo.scss',
})
export class HttpCancelDemo {
  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  loadData() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        console.log('Response:', res);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
 * HTTP CANCEL NOTES
 * -------------------------------------------
 * - HTTP requests can be canceled using RxJS
 * - takeUntil(destroy$) is the standard pattern
 *
 * Used when:
 * - Component destroy
 * - Route change
 * - Search-as-you-type
 *
 * Best practice:
 * - Always cancel long-lived streams
 * - HTTP auto-completes, but cancel for safety
 */

}
