import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-demo',
  imports: [FormsModule],
  templateUrl: './binding-demo-component.html',
  styleUrl: './binding-demo-component.scss',
})
export class BindingDemoComponent {

  title = 'Binding demo';
  count = 0;
  isDisabled = false;
  clicks = signal(0);
  inputValue = '';
  twoWayValue = '';

  increment() {
    this.count += 1;
    this.clicks.update(v => v + 1);
  }

  reset(){
    this.count = 0;
    this.clicks.set(0);
  }

  onInput(e: Event) {
    const el = e.target as HTMLInputElement;
    this.inputValue = el.value;
  }
  consoleTwoWayValue(e:Event) {
    console.log(this.twoWayValue);
  }
}
