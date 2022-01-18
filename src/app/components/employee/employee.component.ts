import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    employeeForm = new FormGroup({

      name : new FormControl(),
      profile : new FormControl(),
      gender : new FormControl(),
      department : new FormControl(),
      salary : new FormControl(),
      date : new FormControl(),
      notes : new FormControl()
    });

    onsubmit() {

      var obj = JSON.stringify(this.employeeForm.value);

      var array : any;
      let obj1 = localStorage.getItem('empdata');
      if(obj1 != null){
        array = JSON.parse(obj1)
      }
      else{
        array = [];
      }
      array.push(obj);
      localStorage.setItem('empdata',JSON.stringify(array))

}

}
