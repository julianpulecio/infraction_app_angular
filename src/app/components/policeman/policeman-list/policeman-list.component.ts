import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PolicemanService } from 'src/app/services/policeman.service';

@Component({
  selector: 'app-policeman-list',
  templateUrl: './policeman-list.component.html',
})
export class PolicemanListComponent implements OnInit {

  constructor(private policeman_service:PolicemanService, private auth_service:AuthService, private router: Router) { }

  policemen:Array<any> = [] 

  ngOnInit(): void {
    this.policeman_service.get_policemen().subscribe({
      next:(data)=> {
        this.policemen = data
      }
    })
  }

  show_edit_form(identification_number:string){
    this.router.navigate([`policeman-edit/${identification_number}`])
  }

  delete(identification_number:string){
    if (confirm("Are you sure? you will not be able to log with this user") == true) {
      this.policeman_service.delete_policeman(identification_number).subscribe({
        next:(data)=> {
          alert('success')
          if(this.auth_service.getJwtToken()){
            this.auth_service.logout()
          }
          this.router.navigate([`login/`])
        },
        error:(error)=> {
          alert(error.error.detail)
        }
      })
    }
  }

}
