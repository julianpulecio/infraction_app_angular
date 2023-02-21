import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  constructor(private person_service:PersonService) { }

  persons:Array<any> = []

  ngOnInit(): void {
    this.person_service.get_persons().subscribe({
      next:(data)=> {
        console.log(data)
        this.persons = data
      }
    })
  }

}
