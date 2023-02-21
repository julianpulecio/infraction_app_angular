import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'infraction_app_angular';

  is_logged:boolean = false

  constructor(private auth_Service:AuthService, private router: Router) {
    router.events.subscribe((val) => {
      if(this.auth_Service.getJwtToken()) {
        this.is_logged = true
      } else {
        this.is_logged = false
      }
    });
  }
  
  log_out(){
    this.auth_Service.logout()
    this.router.navigate(['/login'])
  }

}
