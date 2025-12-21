import { Component } from '@angular/core';
import { CounterSerivce } from '../services/di-counter.service';

@Component({
  selector: 'app-providers-injector-heirarchy-child-demo',
  providers: [CounterSerivce], // Here we have provided in the component level and in child so every child will get the separate instances.
  imports: [],
  templateUrl: './providers-injector-heirarchy-child-demo.html',
  styleUrl: './providers-injector-heirarchy-child-demo.scss',
})
export class ProvidersInjectorHeirarchyChildDemo {
  constructor(public counterService: CounterSerivce) {}
}
/**
 * DI LEVEL 3 — INJECTOR HIERARCHY
 * -------------------------------------------
 * - Angular DI is hierarchical
 * - Closest provider wins
 *
 * Search order:
 * Component → Parent → Module → Root
 *
 * Root provider:
 * - Singleton across app
 *
 * Component provider:
 * - New instance per component
 *
 * Lazy modules:
 * - Create child injectors
 *
 * Interview tip:
 * - Provider location determines service lifetime
 */
