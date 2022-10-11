import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { GetCharactersResolver } from './libs/resolvers/get-characters.resolver';

const routes: Routes = [
  {path: '', resolve: {character: GetCharactersResolver}, children: [
    {path: '', pathMatch: 'full', redirectTo: 'characters'},
    {path: 'characters', loadChildren: () => import('./modules/firstm/firstm.module').then(m => m.FirstmModule)},
  ]},
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
