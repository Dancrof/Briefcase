import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'briefcase', 
  loadChildren: () => import('./component/component.module').then(m => m.ComponentModule)
  },
  {
    path: '**',
    redirectTo: '/briefcase/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
