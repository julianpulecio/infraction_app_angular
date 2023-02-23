import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
})
export class ReportComponent implements OnInit {

  constructor(private person_service:PersonService, private router: Router) { }

  vehicles:Array<any> = [] 

  form_data:FormGroup = new FormGroup({ 
    email: new FormControl(),
  });

  ngOnInit(): void {
  }

  onClickSubmit(value:any){
    this.person_service.get_report(this.form_data.value).subscribe({
      next: (data) => { 
        this.vehicles = data
      },
      error: (error:any) => {
        const validation_errors = error.error
        Object.keys(validation_errors).forEach(prop=>{
          const formControl = this.form_data.get(prop)
          if(formControl){
            formControl.setErrors(validation_errors[prop])
          } else {
            this.form_data.setErrors(validation_errors[prop])
          }
        })
      }
    })
  }
}
