import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private router:Router){

  }

  regBtn()
  {
    this.router.navigate(["/register"])
  }

  logBtn()
  {
    this.router.navigate(["/login"])
  }

  showBtn()
  {
    this.router.navigate(["/showuser"])
  }
}
