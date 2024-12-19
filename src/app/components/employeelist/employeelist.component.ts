import { Component, Inject, inject, OnInit } from '@angular/core';
import { IEmployee } from '../../interfaces/iemployee';
import { HttpClient } from '@angular/common/http';
import { BackendServiceService } from '../../services/backend-service.service';
import {MatTableModule} from '@angular/material/table';
import { Router, RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-employeelist',
  imports: [MatTableModule,RouterLink,RouterModule],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent implements OnInit{
  
  employeeList : IEmployee[] = [];
  service = inject(BackendServiceService);

  displayedColumns: string[] = ['id', 'name', 'age', 'phone','salary','Actions'];

  router = inject(Router)
  ngOnInit(): void {
    this.loadEmployeeList();
  }

  loadEmployeeList(): void {
    this.service.GetAllEmployees().subscribe(
      (employees) => {
        this.employeeList = employees;
        console.log(this.employeeList);
      },
      (error) => {
        console.log('Error loading employee list:', error);
      }
    );
  }

  deleteEmp(id:number){
    this.service.DeleteEmployee(id).subscribe(
      () => { console.log("deleted") },
      (error) => { console.log(error) }
    );
    this.loadEmployeeList()

  }
  
  editEmp(id:number){
    this.router.navigateByUrl('/edit-employee/'+id)
  }
}
