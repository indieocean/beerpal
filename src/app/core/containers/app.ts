import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'beer-app',
    template: `
        <bp-layout>
            <router-outlet></router-outlet>
        </bp-layout>
    `
})

export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}