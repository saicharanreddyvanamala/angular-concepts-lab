import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-json-and-key-value-pipes-demo',
  imports: [CommonModule],
  templateUrl: './json-and-key-value-pipes-demo.html',
  styleUrl: './json-and-key-value-pipes-demo.scss',
})
export class JsonAndKeyValuePipesDemo {
  user = {id: 1, name: 'sai', role: 'dev'};

  /**
 * 🟪 JSON & KeyValue Pipes – Deep Notes
 *
 * 🔹 JSON Pipe:
 *    - Converts objects → pretty JSON string
 *    - Internally uses JSON.stringify()
 *    - Pure pipe → executes only on reference change
 *    - Best for debugging, avoid in production UI
 *
 * 🔹 KeyValue Pipe:
 *    - Transforms Object/Map → array of {key, value}
 *    - Allows *ngFor on objects
 *    - Keys sorted alphabetically by default
 *    - Custom compare function supported
 *      (useful for sorting by key or value)
 *
 * 🔹 Works with:
 *    - Plain objects
 *    - Maps
 *
 * 🔹 Performance:
 *    - Pure pipe → runs ONLY when object/Map reference changes
 *    - With OnPush change detection, immutable updates are required
 *
 * ⭐ Best Practices:
 *    - Use KeyValue pipe for dynamic object rendering
 *    - Use JSON pipe for debugging API responses / state
 *    - Use immutable patterns so pipes re-run correctly
 */

}
