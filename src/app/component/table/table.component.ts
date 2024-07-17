import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { SalaryService } from '../../services/salary.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  constructor( private myEmployeeService:EmployeeService,private mySalary:SalaryService){}

  OnClick()
  {
    this.myEmployeeService.getMsg();
    this.mySalary.getSalary();
  }

  getEmployee()
  {
    console.log(this.myEmployeeService.getEmployes()
    //pipe(take(1))-המשמעות שיפסיק להאזין אחרי פעם אחת שחוזר האובייקט של obserable
    .pipe(take(1)).subscribe(myRes=>{
      console.log(myRes?.data);
    },err=>{console.log(err)}));
  }

  getEmployeeById(id:number)
  {
    console.log(this.myEmployeeService.getEmployeById(id)
    //pipe(take(1))-המשמעות שיפסיק להאזין אחרי פעם אחת שחוזר האובייקט של obserable
    .pipe(take(1)).subscribe(myRes=>{
      console.log(myRes?.data);
    },err=>{console.log(err)}));
  }
  
  addEmployee()
  {
    const data={
      name: "test",
      salary:80000,
      age: 54
     }
     this.myEmployeeService.createEmployee(data).pipe(take(1)).subscribe(myRes=>{ console.log(myRes?.data)
     },err=>{console.log(err)})
      
}

upEmployee()
{
  const data={
    name: "avraham",
    salary:76900,
    age: 44
   }
   
   this.myEmployeeService.updateEmployee(3,data).pipe(take(1)).subscribe(myRes=>{ console.log(myRes?.data)
   },err=>{console.log(err)})
    
}

delEmployee()
{
  this.myEmployeeService.deleteEmployee(2).pipe(take(1)).subscribe(myRes=>{ console.log(myRes?.data)
  },err=>{console.log(err)})
   
}
}