import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicemanService } from 'src/app/services/policeman.service';

interface policeman {
  name: string;
}

@Component({
  selector: 'app-policeman-edit',
  templateUrl: './policeman-edit.component.html',
  
})
export class PolicemanEditComponent implements OnInit {

  constructor(private policeman_service:PolicemanService, private route: ActivatedRoute, private router:Router) { }

  policeman:policeman = {
    name:''
  }

  form_data:FormGroup = new FormGroup({ 
    name: new FormControl(),
  });

  ngOnInit(): void {
    this.policeman_service.get_policeman(this.route.snapshot.paramMap.get('identification_number')).subscribe({
      next:(data)=> {
        this.policeman = data
      },
      error: (error) =>{
        alert(error.error.detail)
        this.router.navigate([`policeman-list/`])
      }
    })
  }

  onClickSubmit(value:any){
    this.policeman_service.edit_policeman(value,this.route.snapshot.paramMap.get('identification_number')).subscribe({
      next:(data)=> {
        alert('success')
        this.router.navigate([`policeman-list/`])
      },
      error: (error) =>{
        alert(error.error.detail)
        console.log(error)  
      }
    })
  }

}
