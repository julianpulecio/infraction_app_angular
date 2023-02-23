import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { InfractionService } from 'src/app/services/infraction.service';
import { VehicleService } from 'src/app/services/vehicle.service';

interface infraction {
  placa_patente: Array<any>;
  comentarios: string
}

@Component({
  selector: 'app-create-infraction',
  templateUrl: './create-infraction.component.html',
})
export class CreateInfractionComponent implements OnInit {

  constructor(private vehicle_service:VehicleService, private infraction_service:InfractionService, private fb: FormBuilder, private route: ActivatedRoute, private router:Router) { }

  infraction:infraction = {
    placa_patente:[],
    comentarios: ''
  }

  form_data:FormGroup = new FormGroup({ 
    placa_patente: new FormControl(),
    comentarios: new FormControl()
  });

  all_vehicles_List:any = [];
  selected_vehicle:any;
  dropdown_vehicles_settings:IDropdownSettings = {
    singleSelection: true,
    idField: 'plate',
    textField: 'plate',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  errors:Array<any> = []

  ngOnInit(): void {
    this.vehicle_service.get_vehicles().subscribe({
      next:(data)=> {
        this.all_vehicles_List = data
      },
      error: (error) =>{
        alert(error.error.detail)
        this.router.navigate([`vehicle-list/`])
      }
    })
  }

  onClickSubmit(value:any){
    if(value.placa_patente.length){
      value.placa_patente = value.placa_patente.find(Boolean).plate
    }
    value.timestamp = new Date().toISOString()
    this.errors = []
    this.infraction_service.new_infraction(value).subscribe({
      next:(data)=> {
        alert('success')
        window.location.reload();
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
