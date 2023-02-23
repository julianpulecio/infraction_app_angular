import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
})
export class PersonListComponent implements OnInit {

  constructor(private person_service:PersonService, private router:Router) { }

  persons:Array<any> = []

  ngOnInit(): void {
    this.person_service.get_persons().subscribe({
      next:(data)=> this.persons = data
    })
  }

  show_edit_form(email:string){
    this.router.navigate([`person-edit/${email}`])
  }

  show_new_form(){
    this.router.navigate([`person-new/`])
  }

  delete(email:string){
    if (confirm("Are you sure?") == true) {
      this.person_service.delete_person(email).subscribe({
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
