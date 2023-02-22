import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

interface credentials {
  identification_number: string
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth_service:AuthService, private router: Router) { }

  credentials:credentials = {
    identification_number:'',
    password:''
  }

  errors:Array<any> = []

  form_data:FormGroup = new FormGroup({ 
    identification_number: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {
    console.log(this.form_data.get('identification_number')?.errors)
  }

  onClickSubmit(value:any){
    this.errors = []
    
    this.auth_service.login(value).subscribe({
      next: (data) => { 
        this.auth_service.doLoginUser(value.identification_number, data)
        this.router.navigate(['/person-list'])
      },
      error: (error:any) => {
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
