import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ForChildComponent } from '../for-child.component/for-child.component';

@Component({
  selector: 'app-for-experiment.component',
  imports: [CommonModule, ForChildComponent],
  templateUrl: './for-experiment.component.html',
  styleUrl: './for-experiment.component.scss',
})
export class ForExperimentComponent {
  listNoTrack = [
      { id: 1, text: 'A' },
      { id: 2, text: 'B' },
      { id: 3, text: 'C' }
    ];

    listWithTrack = structuredClone(this.listNoTrack);

    addNew() {
      const newItem = { id: Math.floor(Math.random()*1000), text: 'NEW' };

      this.listNoTrack.unshift(newItem);
      this.listWithTrack.unshift(newItem);
    }

    trackById(index: number, item: any) {
      return item.id;
    }
}
