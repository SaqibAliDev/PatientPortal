import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'statement',
    title: 'PracticeFit - Statement',
    loadChildren: () => import('./statement-m/statement-m.module').then(m => m.StatementMModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
