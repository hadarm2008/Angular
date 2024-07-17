import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from '../../component/employee-form/employee-form.component';
import { MessegsComponent } from '../../component/messegs/messegs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeMainComponent } from '../../employee-main/employee-main.component';




@NgModule({
  declarations: [MessegsComponent,EmployeeMainComponent,EmployeeFormComponent],

  imports: [
    CommonModule,
     ReactiveFormsModule,FormsModule ,
  
  ],
  
  exports:
  [EmployeeMainComponent]
  
})
export class EmployeeModule { }
