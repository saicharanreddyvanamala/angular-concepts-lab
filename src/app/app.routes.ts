import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  },
  {
    path: 'basics', loadChildren: () => import('./concepts/basics/basics.module').then(m => m.BasicsModule)
  },
  {
    path: 'component-communication', loadChildren: () => import('./concepts/component-communication/component-communication.module').then(m => m.ComponentCommunication)
  }
];
