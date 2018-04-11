import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header-logo',
    template:`
    <a class="navbar-brand">
        <img src="assets/img/logo.png" width="32" height="32" class="d-inline-block" alt=""> Группа компаний "Экстрим"
    </a>
    `
})
export class AppHeaderLogoComponent { }
