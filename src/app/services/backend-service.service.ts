import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/iemployee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {
  apiURL = "https://localhost:7266";

  constructor() { }
  http = inject(HttpClient);
  GetAllEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.apiURL+"/api/Employee");
  }

  AddEmployee(emp :IEmployee ){
    return this.http.post(this.apiURL+'/api/Employee',emp);
  }

}
