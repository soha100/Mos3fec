import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReportComponent } from './report/report.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { JoinRequestsComponent } from './join-requests/join-requests.component';
import { SpecialtiesComponent } from './specialties/specialties.component';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';

const routes: Routes = [
  { path: '', component: AdminMainPageComponent },
  { path: 'appointments-list', component: AppointmentsListComponent },
  { path: 'specialties', component: SpecialtiesComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'join-requests', component: JoinRequestsComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'reports', component: ReportComponent },
  { path: 'reviews', component: ReviewsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashRoutingModule {}
