import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private myHttp:HttpClient){

  };
  getMsg() {
   alert("hello")
  }
 getEmployes()
 {
  return this.myHttp.get<any>("https://dummy.restapiexample.com/api/v1/employees")
 }

 getEmployeById(id:number)
 {
  return this.myHttp.get<any>(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
 }
 
 createEmployee(data:any):Observable<any>
 {
   return this.myHttp.post<any>("https://dummy.restapiexample.com/api/v1/create",data)
 }

 updateEmployee(id:number,data:any)
 {
  return this.myHttp.put<any>(`https://dummy.restapiexample.com/api/v1/update/${id}`,data)
 }
 deleteEmployee(id:number){
  return this.myHttp.delete<any>(`https://dummy.restapiexample.com/api/v1/delete/${id}`)
 }
}
