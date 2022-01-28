import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    userName : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
  });

  onclick(){
    

  }
}
