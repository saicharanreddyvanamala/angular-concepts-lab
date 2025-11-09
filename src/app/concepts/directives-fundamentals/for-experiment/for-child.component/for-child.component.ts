import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-for-child',
  imports: [],
  templateUrl: './for-child.component.html',
  styleUrl: './for-child.component.scss',
})
export class ForChildComponent {
 @Input() item!: { id: number, text: string };

  ngOnInit() {
    console.log('✅ Child Created: ', this.item.id);
  }

  ngOnDestroy() {
    console.log('❌ Child Destroyed: ', this.item.id);
  }

  /**
   * why exactly 2 creates?

because on first run → both lists had:

A B C


so both create 3 children (but that is at start… you didn’t see it again… that’s normal)

when you click add:

listNoTrack (no track)  => rebuild whole thing again → but now angular is smart enough to NOT destroy all in this scenario (this changed since Ivy improvements)
listWithTrack            => only inserts 1


so you will see 2 creates:

1 create for noTrack new item

1 create for withTrack new item

Angular optimized even the no track scenario (in older versions you used to see 3 destroy + 4 create)

Now Ivy can reuse nodes even without trackBy IF object references are same and positions are same for majority.
   */
}
