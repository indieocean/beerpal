import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../models/data' 

@Component({
    selector: 'bp-beer-view',
    template: `
        <div >
            <h3 class="bp-meta-title">{{ data.name }}</h3>
            <p>{{ data.description || "No Description" }}</p>
            <ul class="bp-meta-data">
                <li><strong>ABV</strong> <span class="badge">{{ data.abv }}%</span></li>
                <li><strong>Organic</strong> <span class="badge">{{ data.isOrganic }}</span></li>
                <li><strong>Style</strong> <span class="badge">{{ data.style.shortName }}</span></li>
            </ul>
            <hr>
        </div>
    `
})

export class BeerViewComponent implements OnInit {
    @Input() data: Data;
    constructor() { }

    ngOnInit() { }
}