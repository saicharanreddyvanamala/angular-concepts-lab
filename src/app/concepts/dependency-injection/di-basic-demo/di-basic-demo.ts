import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-di-basic-demo',
  imports: [],
  templateUrl: './di-basic-demo.html',
  styleUrl: './di-basic-demo.scss',
})
export class DiBasicDemo {
  constructor(private loggerService: LoggerService) {}

  logMessage(){
    this.loggerService.log('Hi from the DI Demo component')
  }
}

/**
 * DI LEVEL 1 — FUNDAMENTALS
 * -------------------------------------------
 * Dependency Injection:
 * - Giving dependencies instead of creating them
 *
 * Why DI:
 * - Loose coupling
 * - Testability
 * - Reusability
 *
 * Injector:
 * - Creates dependencies
 * - Stores instances
 * - Decides reuse
 *
 * Golden rule:
 * - Never use `new` for services
 * - Always use constructor injection
 */

/**
 * DI LEVEL 7 — OPTIONAL & SELF INJECTION
 * -------------------------------------------
 * @Optional:
 * - Dependency may not exist
 *
 * @Self:
 * - Only current injector
 *
 * @SkipSelf:
 * - Ignore current injector
 *
 * @Host:
 * - Stop search at host
 *
 * Used in:
 * - Directives
 * - Wrappers
 * - Libraries
 */

/**
 * DI LEVEL 8 — DI WITH ANGULAR FEATURES
 * -------------------------------------------
 * DI works in:
 * - Guards
 * - Resolvers
 * - Interceptors
 * - Pipes
 * - Directives
 * - Standalone components
 *
 * Interceptors:
 * - Use multi providers
 *
 * Key idea:
 * - DI is Angular's backbone
 */

/**
 * DI LEVEL 9 — ADVANCED DI & BEST PRACTICES
 * -------------------------------------------
 * Lazy modules:
 * - Create child injectors
 *
 * Tree shaking:
 * - providedIn: 'root' preferred
 *
 * Avoid:
 * - Circular dependencies
 * - God services
 * - Duplicate providers
 *
 * Best practices:
 * - Clear provider scopes
 * - Small focused services
 * - InjectionToken for config
 */
