import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list : any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let response = this.http.get("http://localhost:8080/employeepayroll/get");
    response.subscribe(data=>this.list=data);
    console.log(this.list);
  }

}
