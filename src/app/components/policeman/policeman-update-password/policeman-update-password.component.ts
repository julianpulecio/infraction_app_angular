import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicemanService } from 'src/app/services/policeman.service';

interface credentials {
  password: string;
  confirm_password: string
}

@Component({
  selector: 'app-policeman-update-password',
  templateUrl: './policeman-update-password.component.html',
})
export class PolicemanUpdatePasswordComponent implements OnInit {

  constructor(private policeman_service:PolicemanService, private route: ActivatedRoute, private router:Router) { }

  credentials:credentials = {
    password:'',
    confirm_password:''
  }

  form_data:FormGroup = new FormGroup({ 
    password: new FormControl(),
    confirm_password: new FormControl(),
  });

  errors:Array<any> = []

  ngOnInit(): void {
  }

  onClickSubmit(value:any){
    this.errors = []
    this.policeman_service.update_password_policeman(value,this.route.snapshot.paramMap.get('identification_number')).subscribe({
      next:(data)=> {
        alert('success')
        this.router.navigate([`policeman-list/`])
      },
      error: (error)=>{
        const validation_errors = error.error
        Object.keys(validation_errors).forEach(prop=>{
          const formControl = this.form_data.get(prop)
          if(formControl){
            formControl.setErrors(validation_errors[prop])
          } else {
            this.errors.push(validation_errors[prop]);
          }
        })
      }
    })
  }
}
