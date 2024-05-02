import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ShowuserComponent } from './component/showuser/showuser.component';

const routes: Routes = [
  {
    path:"register",
    component:RegistrationComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    component:ProfileComponent
  },
  {
    path:"showuser",
    component:ShowuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
