import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BackendServiceService } from '../../services/backend-service.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormBuilder().group({
    name : ['',Validators.required],
    password : ['',Validators.required]
  })

  service = inject(BackendServiceService)
  router = inject(Router);

  save(){
    const name = this.loginForm.value.name!;
    const password = this.loginForm.value.password!;

    this.service.Login(name,password).subscribe((value)=>{
      console.log(value);
      localStorage.setItem("token",value.token)
      this.router.navigateByUrl('/');
    })
  }

}
