import { Component } from '@angular/core';
import { EventService } from './event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-shop';
  isAdminLoggedIn=false;
  isUserLoggedIn=false;
  constructor(private eventService:EventService,private router: Router) { }

  ngOnInit(): void {
    this.eventService.loginDetails.subscribe(logg=>{
   var admin=localStorage.getItem('admin');
   var user=localStorage.getItem('user');

   if(admin){
    this.isAdminLoggedIn=true;
   } else if(user) {
    this.isUserLoggedIn=true;
   } else {

   }
  });

  }

  logout(){
    this.isAdminLoggedIn=false;
    this.isUserLoggedIn=false;
    localStorage.removeItem('admin');
   localStorage.removeItem('user');
   this.eventService.isEnableLoginForm.emit(true);

   this.router.navigate(["login"]);

  }


}
