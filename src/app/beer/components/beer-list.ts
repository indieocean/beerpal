import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../models/beer'

@Component({
    selector: 'bp-beer-list',
    template: `
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <div class="col-md-12">
                        <input type="text" [value]="nameValue" (input)="nameValue = $event.target.value" class="form-control" placeholder="Filter by Name...">
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div *ngIf="beer">
            <bp-beer-view *ngFor="let data of (beer ? beer.data : []) | search: 'name' : nameValue" [data]="data"></bp-beer-view>
        </div>
    `
})

export class BeerListComponent implements OnInit {
    @Input() beer: Beer;
    nameValue: string = "";
    
    constructor() { }

    ngOnInit() { }
}