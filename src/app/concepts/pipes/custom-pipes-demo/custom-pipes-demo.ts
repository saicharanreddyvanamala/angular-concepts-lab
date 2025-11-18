import { Component } from '@angular/core';
import { AppendPipe } from '../append.pipe';
import { TruncatePipe } from '../truncate.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-pipes-demo',
  imports: [CommonModule ,AppendPipe, TruncatePipe],
  templateUrl: './custom-pipes-demo.html',
  styleUrl: './custom-pipes-demo.scss',
})
export class CustomPipesDemo {

  userName = 'Charan';
  framework = 'Angular';
  today = new Date();
  /*
 🧠 CUSTOM PIPES — NOTES
 ------------------------
 📘 What are Custom Pipes?
  → Developer-defined transformation logic that can be reused in templates.

 🧩 Syntax:
   @Pipe({ name: 'pipeName' })
   export class MyPipe implements PipeTransform {
       transform(value: any, ...args: any[]): any {
           return transformedValue;
       }
   }

 ⚙️ Parameters:
   - Pipes can accept arguments separated by `:`
     {{ value | myPipe:arg1:arg2 }}

 🧮 Example:
   {{ 'Sai' | append:' Reddy' }}
   → transforms 'Sai' → 'Sai Reddy'

 🚀 Why Custom Pipes?
   - Encapsulate data transformations
   - Improve readability
   - Reuse formatting logic across components


   -----------------------
 ✔ Pipes are used to transform data directly in templates.
 ✔ Created using @Pipe() decorator + implementing PipeTransform.
 ✔ transform(value, ...args): called by Angular during change detection.
 ✔ Must be PURE (side-effect free) for performance and stability.
 ✔ Good for:
      - formatting
      - mapping enums → labels
      - masking
      - slicing
      - filtering small lists
 ✔ Should NOT:
      - make HTTP calls
      - modify external variables
      - update services
      - perform async tasks
 ✔ pure:true (default): transform() runs only when inputs change.
 ✔ pure:false (impure): runs on every change detection → expensive.
*/



/*
 🔗 CHAINING PIPES — NOTES
 -------------------------
 📘 What It Is:
   - Using multiple pipes sequentially to transform a value step-by-step.

 🧩 Syntax:
   {{ value | pipeA:arg | pipeB:arg | pipeC }}

 ⚙️ How It Works Internally:
   pipeC.transform(
     pipeB.transform(
       pipeA.transform(value, arg),
       arg
     )
   );

 🧠 Order:
   - Evaluated left to right visually
   - Executed inside-out (nested calls)

 💡 Real Use Cases:
   - Formatting + slicing text
   - Date/time + localization
   - Filtering + sorting lists
   - Custom + built-in combos

 ⚖️ Best Practice:
   - Keep each pipe focused on a single responsibility
   - Chain instead of writing one big “god pipe”
*/

}
