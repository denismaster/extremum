import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent {
  jobs: any;
  constructor(private http: HttpClient) {
    http.get<any>("https://api.hh.ru/vacancies?employer_id=71812").subscribe(result=>this.jobs=result);
  }
}
