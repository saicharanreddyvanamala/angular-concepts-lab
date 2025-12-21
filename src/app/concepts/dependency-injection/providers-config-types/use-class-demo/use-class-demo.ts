import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { DIFileLoggerService } from '../../services/di-file-logger.service';

@Component({
  selector: 'app-use-class-demo',
  providers:[{
    provide: LoggerService, useClass: DIFileLoggerService
  }],
  imports: [],
  templateUrl: './use-class-demo.html',
  styleUrl: './use-class-demo.scss',
})
export class UseClassDemo {

  constructor(private loggerService: LoggerService) {}

  logMessage(){
    this.loggerService.log('Hi from the Use Class component')
  }
}
/**
 * useClass — DEFAULT & MOST COMMON
🔹 What it does

Tells Angular which class to instantiate for a token.
 *
 * 🧠 What happens?

Component asks for LoggerService

Angular creates FileLoggerService

✔ Swap implementations without changing component
✔ Used for mocking & environment switching

🧠 REAL-WORLD USE

Replace services in tests

Platform-specific services

Feature toggles */
