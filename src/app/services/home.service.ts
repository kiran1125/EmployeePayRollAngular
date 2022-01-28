import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  

  private baseUrl = "http://localhost:8080/employeepayroll";

  constructor(private http : HttpClient) { }


  findAll(): Observable<any> {
    return this.http.get(this.baseUrl + "/get");
  }

  createEmployee(emp: any): Observable<any> {
    return this.http.post(this.baseUrl+"/post", emp);
  }


  deleteEmployee(employeeId:number){
    return this.http.delete(this.baseUrl+"/delete/"+employeeId)
  }

  getEmployee(employeeId:any) : Observable<any> {
    return this.http.get(this.baseUrl + "/get/"+employeeId)
  }

  updateEmployee(employeeId:any,employee:any) : Observable<any> {
    return this.http.put(this.baseUrl + "/put/"+employeeId,employee)
  }
  
}