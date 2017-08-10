import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bp-layout',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-md-offset-3 col-md-6">
                    <img class="bp-logo" src="assets/img/beer-128.png" alt="Beer Pal">
                    <h1 class="bp-header-title">Beer Pal</h1>
                    <p class="text-center">You don't know beer... drink responsibly!</p>
                    <hr>
                </div>
                <div class="col-md-offset-3 col-md-6">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    `
})

export class LayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}