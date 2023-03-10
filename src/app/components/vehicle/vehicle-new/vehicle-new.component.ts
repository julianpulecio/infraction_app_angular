import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { PersonService } from 'src/app/services/person.service';
import { VehicleService } from 'src/app/services/vehicle.service';

interface vehicle {
  plate: string;
  brand: string;
  color: string;
  person: Array<any>;
}

@Component({
  selector: 'app-vehicle-new',
  templateUrl: './vehicle-new.component.html',
})
export class VehicleNewComponent implements OnInit {

  constructor(private vehicle_service:VehicleService, private person_service:PersonService, private fb: FormBuilder, private route: ActivatedRoute, private router:Router) { }

  vehicle:vehicle = {
    plate:'',
    brand:'',
    color:'',
    person: [ {id: 0}]
  }

  form_data:FormGroup = new FormGroup({ 
    plate: new FormControl(),
    brand: new FormControl(),
    color: new FormControl(),
    person: new FormControl()
  });

  all_persons_List:any = [];
  selected_person:any;
  dropdown_persons_settings:IDropdownSettings = {
    singleSelection: true,
    idField: 'id',
    textField: 'email',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  errors:Array<any> = []

  ngOnInit(): void {
    this.person_service.get_persons().subscribe({
      next:(data)=> {
        this.all_persons_List = data
      },
      error: (error) =>{
        alert(error.error.detail)
        this.router.navigate([`vehicle-list/`])
      }
    })
  }

  onClickSubmit(value:any){
    value.person = value.person.find(Boolean).id
    this.errors = []
    this.vehicle_service.new_vehicle(value).subscribe({
      next:(data)=> {
        alert('success')
        this.router.navigate([`vehicle-list/`])
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
