import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: false,
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent {

  myProductForm:FormGroup=new FormGroup({
    name:new FormControl("",Validators.required),
    numberId: new FormControl(0,[Validators.min(9),Validators.required]),
    adress:new FormControl("",Validators.required)
   });
  myOnSubmit()
  {
    console.log(this.myProductForm.value);
  }
}
