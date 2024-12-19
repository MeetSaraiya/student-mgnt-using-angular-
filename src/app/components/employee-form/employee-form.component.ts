import { Component, inject, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IEmployee } from '../../interfaces/iemployee';
import { BackendServiceService } from '../../services/backend-service.service';
import { error } from 'node:console';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-employee-form',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,RouterLink],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {
  service = inject(BackendServiceService);
  activatedRoute = inject(ActivatedRoute);


  isEdit : boolean = false;
  id?:number ;
  title : string = 'Add';

  ngOnInit(): void {
     this.id = this.activatedRoute.snapshot.params['id'];
     if(this.id){
        this.isEdit=true;
        this.title = 'Edit'
        this.service.singleEmployee(this.id!).subscribe((result)=>{
          console.log(result);
          this.employeeForm.patchValue(result)
        });
     }
  }

  employeeForm = new FormBuilder().group({
    name: ['', [Validators.required, Validators.minLength(1)]],
    age: [0, [Validators.required]],
    salary: [0, [Validators.required]],
    phone: ['', [Validators.required, Validators.minLength(5)]],
    password : ['',[Validators.required]],
  })

 
  save() {

    if (this.isEdit) {
      
      const employeeOnj: IEmployee = {
        name: this.employeeForm.value.name!,
        age: this.employeeForm.value.age!,
        phone: this.employeeForm.value.phone!,
        salary: this.employeeForm.value.salary!,
        password : this.employeeForm.value.password!,
      }
  
      console.log(this.employeeForm.value);
      this.service.EditEmployee(this.id!,employeeOnj).subscribe(
        (value)=>{
          console.log(value);
        },(err)=>{
          console.log(err);
        }        
      )

    } else {
      
    const employeeOnj: IEmployee = {
      name: this.employeeForm.value.name!,
      age: this.employeeForm.value.age!,
      phone: this.employeeForm.value.phone!,
      salary: this.employeeForm.value.salary!,
      password : this.employeeForm.value.password!,
    }

    console.log(this.employeeForm.value);
    this.service.AddEmployee(employeeOnj!).subscribe(
      () => {
        console.log("value")
      },
      (error)=>console.log(error)
    )
  }
}

}
