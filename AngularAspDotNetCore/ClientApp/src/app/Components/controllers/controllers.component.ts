import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../Service/school.service';
import { School } from '../../Model/school';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.css']
})
export class ControllersComponent implements OnInit {
  schools: School[];

  constructor(private schoolService : SchoolService) { }

  ngOnInit() {
  }

  getSchools() {
    this.schoolService.getSchools().subscribe(schools => {
      this.schools = schools;
    });
  }

  getSchoolsAll() {
    this.schoolService.getSchoolsAll().subscribe(schools => {
      this.schools = schools;
    });
  }

  getSchoolsError() {
    this.schoolService.getSchoolsError().subscribe(schools => {
      this.schools = schools;
    });
  }
}
