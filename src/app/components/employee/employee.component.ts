import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
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

      name : new FormControl('',Validators.required),
      profile : new FormControl('',Validators.required),
      gender : new FormControl('',Validators.required),
      department : new FormControl('',Validators.required),
      salary : new FormControl('',Validators.required),
      date : new FormControl('',Validators.required),
      notes : new FormControl('',Validators.required)
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
get name() {
  return this.employeeForm.get('name');
}
get notes() {
  return this.employeeForm.get('notes');
}
get profile() {
  return this.employeeForm.get('profile');
}
get gender() {
  return this.employeeForm.get('gender')?.value;
}
get department() {
  return this.employeeForm.get('department');
}
get salary() {
  return this.employeeForm.get('salary');
}
get date() {
  return this.employeeForm.get('date');
}

}
