import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string='';
  password: string='';
  isEnableLoginForm=true;
  form: any ;
  constructor(private router: Router,private eventService:EventService,private fb: FormBuilder) { }

    ngOnInit() {
      this.eventService.isEnableLoginForm.subscribe((isEnableLoginForm)=>
      {
        this.isEnableLoginForm=isEnableLoginForm;
      });

      this.form = this.fb.group ({
        username: ['', []],
        password: ['', []]
        });
    }
  
    submit() : void {
      if(this.form.value.username == 'admin' && this.form.value.password == 'admin') {
       //this.router.navigate(["admin"]);
       this.isEnableLoginForm=false;
       localStorage.setItem('admin','admin');
       localStorage.removeItem('user');
       this.eventService.loginDetails.emit("admin");
      } else if(this.form.value.username == 'user' && this.form.value.password == 'user') {
        //this.router.navigate(["user"]);
        this.isEnableLoginForm=false;
        localStorage.setItem('user','user');
        localStorage.removeItem('admin');
        this.eventService.loginDetails.emit("user");
      } else {
        alert("Invalid credentials");
      }
    } 
  
   
  
    submit1() {
      console.log(this.username);
      console.log(this.password);

      
      if (this.form.valid) {
        this.submitEM.emit(this.form.value);
      }
    }
    @Input() error: string | null=null;
  
    @Output() submitEM = new EventEmitter();
  
  }


