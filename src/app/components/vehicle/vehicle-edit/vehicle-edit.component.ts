import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { PersonService } from 'src/app/services/person.service';
import { VehicleService } from 'src/app/services/vehicle.service';

interface vehicle {
  brand: string;
  color: string;
  person: Array<any>;
}

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
})
export class VehicleEditComponent implements OnInit {

  constructor(private vehicle_service:VehicleService, private person_service:PersonService, private fb: FormBuilder, private route: ActivatedRoute, private router:Router) { }

  vehicle:vehicle = {
    brand:'',
    color:'',
    person:[]
  }

  form_data:FormGroup = new FormGroup({ 
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
    this.vehicle_service.get_vehicle(this.route.snapshot.paramMap.get('plate')).subscribe({
      next:(data)=> {
        this.vehicle = data
        this.vehicle.person = [data.person]
      },
      error: (error) =>{
        alert(error.error.detail)
        this.router.navigate([`vehicle-list/`])
      }
    })
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
    if(value.person.length){
      value.person = value.person.find(Boolean).id
    }
    this.errors = []
    this.vehicle_service.edit_vehicle(value,this.route.snapshot.paramMap.get('plate')).subscribe({
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
