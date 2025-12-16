import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { observeOn, of, queueScheduler } from 'rxjs';

@Component({
  selector: 'app-queue-scheduler-basic',
  imports: [CommonModule],
  templateUrl: './queue-scheduler-basic.html',
  styleUrl: './queue-scheduler-basic.scss',
})
export class QueueSchedulerBasic implements OnInit {

  logs: string[] = [];

  ngOnInit(): void {

    this.logs.push("1. Start");

    of("A", "B", "C")
      .pipe(observeOn(queueScheduler))
      .subscribe(value => {
        this.logs.push(`Queue emission: ${value}`);
      });

    this.logs.push("2. End");
  }
}
