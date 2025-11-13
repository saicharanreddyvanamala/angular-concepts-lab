import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes-demo',
  imports: [CommonModule],
  templateUrl: './built-in-pipes-demo.html',
  styleUrl: './built-in-pipes-demo.scss',
})
export class BuiltInPipesDemo {

  name = 'Sai Charan Reddy';
  amount = 123456.789;
  today = new Date();
  jsonData = {id: 1, name: 'Angular', type: 'Framework'};
  users = ['Ravi', 'Teja', 'Kiran', 'Anu'];
}
