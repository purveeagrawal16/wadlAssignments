import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor()
  {

  }

  ngOnInit() :void
  {

  }

  user_records : any[] =[];
  final_user :any[] = [];
  data = {
    name:"",
    number:"",
    email:"",
    password:""
  }

  doRegistration(Values:any)
  {
    // this.user_records = JSON.parse(localStorage.getItem('users') || '{}');
    if(this.user_records.some((v) =>{
      return v.email == this.data.email
    })){
      alert("Duplicate data");
    }
    else
    {
      this.user_records.push(this.data);
      localStorage.setItem("users",JSON.stringify(this.user_records));
      alert("Registered successfully");
    }
  }
}
