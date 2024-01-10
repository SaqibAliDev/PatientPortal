import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatementHomeComponent } from './statement-home/statement-home.component';

const routes: Routes = [
  { path: 'home', component: StatementHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatementMRoutingModule { }
