import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header-phone',
    template:`
    <span class="navbar-text">
        <strong>8 800 222 1468</strong>
    </span>
    `,
    styles:[
        `
        .navbar-text{
            font-size:1.25rem;
            padding-right:1rem;
        }
        `
    ]
})
export class AppHeaderPhoneComponent { }
