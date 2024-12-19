import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/iemployee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {
  apiURL = "http://localhost:5122";

  constructor() { }
  http = inject(HttpClient);
  GetAllEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.apiURL+"/api/Employee");
  }

  singleEmployee(id:number){
    return this.http.get<IEmployee>(this.apiURL+"/api/Employee/"+id);
  }

  AddEmployee(emp :IEmployee ){
    return this.http.post(this.apiURL+'/api/Employee',emp);
  }

  DeleteEmployee(id:number){
    return this.http.delete(this.apiURL+'/api/Employee/('+id+')');
  }

  EditEmployee(id:number,emp:IEmployee){
    return this.http.put(this.apiURL+'/api/Employee/'+id,emp);
  }

  Login(name :string,password:string){
    return this.http.post<{token:string}>(this.apiURL+'/api/Auth/login',
      {"name":name,"password":password}
    )
  }

}
