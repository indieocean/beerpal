import { Routes } from '@angular/router'

export const routes: Routes = [
  { path: '', redirectTo: '/beerpal', pathMatch: 'full' },
  {
    path: 'beerpal',
    loadChildren: './beer/beer.module#BeerModule'
  }
];