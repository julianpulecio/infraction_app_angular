import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

interface person {
  email: string;
  name: string;
}

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
})
export class PersonEditComponent implements OnInit {

  constructor(private person_service:PersonService, private route: ActivatedRoute, private router:Router) { }

  person:person = {
    email:'',
    name:'',
  }

  form_data:FormGroup = new FormGroup({ 
    email: new FormControl(),
    name: new FormControl(),
  });

  errors:Array<any> = []

  ngOnInit(): void {
    this.person_service.get_person(this.route.snapshot.paramMap.get('email')).subscribe({
      next:(data)=> {
        this.person = data
      },
      error: (error) =>{
        alert(error.error.detail)
        this.router.navigate([`person-list/`])
      }
    })
  }

  onClickSubmit(value:any){
    this.person_service.edit_person(value,this.route.snapshot.paramMap.get('email')).subscribe({
      next:(data)=> {
        alert('success')
        this.router.navigate([`person-list/`])
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
