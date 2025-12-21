import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { PLUGINS } from '../../services/plugin.token';

@Component({
  selector: 'app-multi-provider-demo',
  providers: [
    {
      provide: PLUGINS, useValue: 'AuthPlugin', multi: true
    },
    {
      provide: PLUGINS, useValue: 'LoggerPlugin', multi: true
    },
    {
      provide: PLUGINS, useValue: 'AnalyticsPlugin', multi: true
    }
  ],
  imports: [CommonModule],
  templateUrl: './multi-provider-demo.html',
  styleUrl: './multi-provider-demo.scss',
})
export class MultiProviderDemo {
  constructor(@Inject(PLUGINS) public plugins: string[]) {}
}


/**
 * DI LEVEL 6 — MULTI PROVIDERS
 * -------------------------------------------
 * Multi provider:
 * - Token resolves to array
 *
 * Use cases:
 * - Interceptors
 * - Plugins
 * - Validators
 *
 * Rules:
 * - multi: true required
 * - Do not mix with non-multi
 *
 * Angular usage:
 * - HTTP_INTERCEPTORS
 */
