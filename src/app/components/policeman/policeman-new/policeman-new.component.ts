import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicemanService } from 'src/app/services/policeman.service';

interface policeman {
  identification_number: string
  name: string;
  password: string;
  confirm_password: string
}

@Component({
  selector: 'app-policeman-new',
  templateUrl: './policeman-new.component.html',
})
export class PolicemanNewComponent implements OnInit {

  constructor(private policeman_service:PolicemanService, private route: ActivatedRoute, private router:Router) { }

  policeman:policeman = {
    identification_number:'',
    name:'',
    password:'',
    confirm_password:''
  }

  form_data:FormGroup = new FormGroup({ 
    identification_number: new FormControl(),
    name: new FormControl(),
    password: new FormControl(),
    confirm_password: new FormControl(),
  });

  errors:Array<any> = []

  ngOnInit(): void {
  }

  onClickSubmit(value:any){
    this.errors = []
    this.policeman_service.new_policeman(value).subscribe({
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
