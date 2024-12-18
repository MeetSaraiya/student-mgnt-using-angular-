import { Component, Inject, inject, OnInit } from '@angular/core';
import { IEmployee } from '../../interfaces/iemployee';
import { HttpClient } from '@angular/common/http';
import { BackendServiceService } from '../../services/backend-service.service';
import {MatTableModule} from '@angular/material/table';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-employeelist',
  imports: [MatTableModule,RouterLink],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent implements OnInit{
  
  employeeList : IEmployee[] = [];
  service = inject(BackendServiceService);

  displayedColumns: string[] = ['id', 'name', 'age', 'phone','salary'];


  ngOnInit(): void {
    this.service.GetAllEmployees().subscribe(
      (value)=> {
        this.employeeList = value;
        console.log(this.employeeList)
      } 
    )


  }
  
}
