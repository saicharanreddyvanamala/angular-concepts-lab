import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { User } from './interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiCachingService {

  private readonly baseUrl =
    'https://jsonplaceholder.typicode.com/users';

  // cache reference
  private usersCache$!: Observable<User[]>;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {

    // If cache exists, return it
    if (!this.usersCache$) {
      this.usersCache$ = this.http
        .get<User[]>(this.baseUrl)
        .pipe(
          shareReplay(1)
        );
    }

    return this.usersCache$;
  }

  /**
 * HTTP CACHING NOTES
 * -------------------------------------------
 * - HTTP caching should be done in SERVICES
 * - shareReplay(1) is the most common pattern
 *
 * shareReplay:
 * - Shares one HTTP request
 * - Replays cached data to new subscribers
 * - Prevents duplicate API calls
 *
 * Best practice:
 * - Cache GET requests only
 * - Invalidate cache on mutations
 *
 * Interview tip:
 * - Services + shareReplay = caching pattern
 */

}
