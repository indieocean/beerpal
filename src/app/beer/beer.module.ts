import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components';

import { BeerDashboardPageComponent } from './containers/beer-dashboard-page';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BeerEffects } from './effects/beer';
import { reducers } from './reducers';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: BeerDashboardPageComponent }
        ]),
        ComponentsModule,
        StoreModule.forFeature('beer', reducers),
        EffectsModule.forFeature([BeerEffects])
    ],
    declarations: [
        BeerDashboardPageComponent
    ],
    providers: [],
})
export class BeerModule { }

