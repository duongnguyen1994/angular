import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getList() : Observable<Employee[]>{
    return this.httpClient.get('https://60657393b8fbbd0017566608.mockapi.io/angular')
                          .pipe(map(result =>result as Employee[]))
  }
  delete(id:string) : Observable<any>{
    return this.httpClient.delete(`https://60657393b8fbbd0017566608.mockapi.io/angular/${id}`)
  }

  create(employee: Partial<Employee>) : Observable<Employee>{
    return this.httpClient.post('https://60657393b8fbbd0017566608.mockapi.io/angular', employee)
                          .pipe(map(result =>result as Employee));
  }
}
