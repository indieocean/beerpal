import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app';
import { LayoutComponent } from './components/layout';

import { BeerService } from './services/beer';

export const COMPONENTS = [
  AppComponent,
  LayoutComponent
];

@NgModule({
    imports: [
      CommonModule,
      RouterModule
    ],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: [BeerService],
})

export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
