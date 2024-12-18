import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { IEmployee } from '../../interfaces/iemployee';
import { BackendServiceService } from '../../services/backend-service.service';
@Component({
  selector: 'app-employee-form',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  service = inject(BackendServiceService);

  employeeForm = new FormBuilder().group({
    name: ['', [Validators.required, Validators.minLength(1)]],
    age: [10, [Validators.required]],
    salary: [10000, [Validators.required]],
    phone: ['00000 000000', [Validators.required, Validators.minLength(5)]]
  })

  save() {
    const employeeOnj: IEmployee = {
      name: this.employeeForm.value.name!,
      age: this.employeeForm.value.age!,
      phone: this.employeeForm.value.phone!,
      salary: this.employeeForm.value.salary!,
    }

    console.log(this.employeeForm.value);
    this.service.AddEmployee(employeeOnj!).subscribe(
      () => {
        console.log("value")
      }
    )
  }

}
