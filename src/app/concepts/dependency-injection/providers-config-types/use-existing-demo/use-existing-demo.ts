import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { DIFileLoggerService } from '../../services/di-file-logger.service';

@Component({
  selector: 'app-use-existing-demo',
  imports: [],
  providers: [{
    provide:DIFileLoggerService, useExisting: LoggerService
  }],
  templateUrl: './use-existing-demo.html',
  styleUrl: './use-existing-demo.scss',
})
export class UseExistingDemo {
  constructor(private loggerService: DIFileLoggerService) {}

  isLogged() {
    console.log('isLogged in from LoggerService instance due to useExistig: ', this.loggerService.isLogged);
  }
}
/**
 * What useExisting REALLY means (important)
Mental model:

useExisting = alias

“When someone asks for TOKEN A, give them the SAME instance as TOKEN B”

It does NOT:

Create a new instance

Copy data

Sync values

It only points two tokens to the same object
 *
 *
 *  When SHOULD you use useExisting in real projects?
✅ Real-world use cases:

Multiple interfaces → same service

Backward compatibility

Angular forms (ControlValueAccessor)

Extending behavior without new instance

Feature toggles / abstraction layers */
