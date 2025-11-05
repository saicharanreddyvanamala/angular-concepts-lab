import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  },
  {
    path: 'basics', loadChildren: () => import('./concepts/basics/basics.module').then(m => m.BasicsModule)
  },
];
