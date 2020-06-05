import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  employee:any=[];

  constructor(private emp: EmployeeService) { }

  ngOnInit() {
    this.emp.getEmp().subscribe(data => this.employee = data)
  }


}
