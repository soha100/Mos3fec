import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { DoctorProfileCompleteComponent } from './doctor-profile-complete/doctor-profile-complete.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'complete', component: DoctorProfileCompleteComponent },
  { path: 'reset', component: ResetPassComponent },
  { path: 'confirm-email', component: ConfirmEmailComponent },
  { path: 'confirm-email/:userId/:Code', component: ConfirmEmailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
