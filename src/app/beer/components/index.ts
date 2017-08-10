import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerListComponent } from './beer-list';
import { BeerViewComponent } from './beer-view';
import { RouterModule } from '@angular/router';
import { SearchPipe } from '../pipes/search';

export const COMPONENTS = [
    BeerListComponent,
    BeerViewComponent,
    SearchPipe
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: COMPONENTS,
    declarations: COMPONENTS,
    providers: [],
})
export class ComponentsModule { }
