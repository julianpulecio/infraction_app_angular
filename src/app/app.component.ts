import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import  jwt_decode from "jwt-decode";
import { PolicemanService } from './services/policeman.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'infraction_app_angular';

  is_logged:boolean = false

  constructor(private auth_Service:AuthService, private policeman_service:PolicemanService, private router: Router) {
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
  update_password(){
    if(this.auth_Service.getJwtToken()) {
      let token = this.auth_Service.getJwtToken()
      let decode_token:any = jwt_decode(token? token:'')
      let identification_number = decode_token.identification_number
      this.router.navigate([`/policeman-update-password/${identification_number}`])
    }
  }
}
