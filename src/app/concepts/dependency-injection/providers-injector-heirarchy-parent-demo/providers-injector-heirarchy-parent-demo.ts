import { Component } from '@angular/core';
import { ProvidersInjectorHeirarchyChildDemo } from "../providers-injector-heirarchy-child-demo/providers-injector-heirarchy-child-demo";
import { CounterSerivce } from '../services/di-counter.service';

@Component({
  selector: 'app-providers-injector-heirarchy-parent-demo',
  providers:[CounterSerivce], // We have provided the service in the parent so the child will get this instance and if they want they can override it in the child.
  imports: [ProvidersInjectorHeirarchyChildDemo],
  templateUrl: './providers-injector-heirarchy-parent-demo.html',
  styleUrl: './providers-injector-heirarchy-parent-demo.scss',
})
export class ProvidersInjectorHeirarchyParentDemo {

}
