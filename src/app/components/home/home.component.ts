import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employee: any;
  msg:any;

  constructor(private homeService:HomeService,private router:Router) { }

  ngOnInit(): void {
    this.homeService.findAll().subscribe(data=>{
      this.employee = data.data;
      console.log(this.employee);
    });

  }

  remove(e:any){
    this.homeService.deleteEmployee(e.employeeId).subscribe(res =>{
      alert("Employee Data Deleted..!")
    })
  }

  update(employeeId : number){
    this.router.navigate(['/update',employeeId])
  }
  
}