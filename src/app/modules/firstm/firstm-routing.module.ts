import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstcComponent } from './components/firstc/firstc.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'characters'},
  {path: 'characters', component: FirstcComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FirstmRoutingModule { }
