import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormArray, FormBuilder } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {ActivatedRoute, Router} from '@angular/router'; 
import { Employee } from 'src/app/model/employee';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  showupdate :boolean =false;
  employeeId : any;

  departments: Array<any> = [
    {
      name: "HR",
      value: "HR",
      checked: false

    },
    {
      name: "Sales",
      value: "Sales",
      checked: false
    },
    {
      name: "Finance",
      value: "Finance",
      checked: false
    },
    {
      name: "Engineer",
      value: "Engineer",
      checked: false
    },
    {
      name: "Other",
      value: "Other",
      checked: false
    },
  ]

  onCheckboxChange(event: MatCheckboxChange) {
    const department: FormArray = this.employeeForm.get('department') as FormArray;

    if (event.checked) {
      department.push(new FormControl(event.source.value));
    } else {
      const index = department.controls.findIndex(x => x.value === event.source.value);
      department.removeAt(index);
    }
  }
  emp:Employee = new Employee();
  
  constructor(private formBuilder : FormBuilder,private router:Router,private homeService:HomeService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.employeeId = params.get('id');
      if(this.employeeId){
        this.getEmployee(this.employeeId);
      }
    })
  }


  employeeForm = new FormGroup({
    name: new FormControl(''),
    profilePic: new FormControl(''),
    gender: new FormControl(''),
    department: this.formBuilder.array([], [Validators.required]),
    salary: new FormControl(''),
    // startDate: new FormControl(''),
    note: new FormControl('') 
  });



  saveEmployee(){

    this.homeService.createEmployee(this.employeeForm.value).subscribe(response=> {
      console.log(response);
      console.log(this.employeeForm.value);
     
    });
    this.router.navigate(['']);

  }

  getEmployee(employeeId : any){
    this.homeService.getEmployee(employeeId).subscribe((employee:any) => this.updateEmployee(employee)
    );
  }

  updateEmployee(employee:any){
    this.showupdate = true;
    console.log("update successfull",employee.data.name)
    this.employeeForm.patchValue({
      name : employee.data.name,
      profilePic : employee.data.profilePic,
      gender : employee.data.gender,
      department : employee.data.department,
      salary : employee.data.salary,
      note : employee.data.note
    });
  }

  update(){
    this.homeService.updateEmployee(this.employeeId,this.employeeForm.value).subscribe(response=> {
      console.log(response);
      console.log(this.employeeForm.value);
     
    });
    this.router.navigate(['']);
  }
}


