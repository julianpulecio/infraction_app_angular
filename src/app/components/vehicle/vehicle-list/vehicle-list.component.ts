import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
})
export class VehicleListComponent implements OnInit {

  constructor(private vehicle_service:VehicleService, private router:Router) { }

  vehicles:Array<any> = []

  ngOnInit(): void {
    this.vehicle_service.get_vehicles().subscribe({
      next:(data)=> this.vehicles = data
    })
  }

  show_edit_form(plate:string){
    this.router.navigate([`vehicle-edit/${plate}`])
  }

  show_new_form(){
    this.router.navigate([`vehicle-new/`])
  }

  delete(plate:string){
    if (confirm("Are you sure?") == true) {
      this.vehicle_service.delete_vehicle(plate).subscribe({
        next:(data)=> {
          alert('success')
          window.location.reload();
        },
        error:(error)=> {
          alert(error.error.detail)
        }
      })
    }
  }

}
