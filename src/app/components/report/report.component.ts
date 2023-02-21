import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private person_service:PersonService, private router: Router) { }

  form_data:FormGroup = new FormGroup({ 
    email: new FormControl(),
  });

  ngOnInit(): void {
  }

  onClickSubmit(value:any){
    this.person_service.get_report(this.form_data.value).subscribe({
      next: (data) => { 
        console.log(data)
      },
      error: (error:any) => {
        console.log(error)
      }
    })
  }
}
