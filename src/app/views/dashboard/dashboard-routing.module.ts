import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CommentsPageComponent } from './comments-page/comments-page.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { PatientsComponent } from './patients/patients.component';
import { RecentInvoicesComponent } from './recent-invoices/recent-invoices.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SettingsComponent } from './Settings-components/settings/settings.component';
import { WorkingHoursComponent } from './Settings-components/working-hours/working-hours.component';
import { ClinicComponent } from './Settings-components/clinic/clinic.component';
import { AwardsComponent } from './Settings-components/awards/awards.component';
import { EducationComponent } from './Settings-components/education/education.component';
import { ExperienceComponent } from './Settings-components/experiences/experiences.component';
import { PersonalInfoComponent } from './Settings-components/personal-info/personal-info.component';
import { ChatComponent } from './chatbot/chat/chat.component';
import { AiChatComponent } from './ai-chat/ai-chat.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'appointment', component: AppointmentPageComponent },
  { path: 'chat', component: ChatPageComponent },
  { path: 'comments', component: CommentsPageComponent },
  { path: 'doctor-profile', component: DoctorProfileComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'recent-invoices', component: RecentInvoicesComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  // { path: 'chatbot', component: ChatComponent },
  { path: 'ai_chat', component: AiChatComponent },

  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      { path: 'working-hours', component: WorkingHoursComponent },
      { path: 'clinic', component: ClinicComponent },
      { path: 'awards', component: AwardsComponent },
      { path: 'education', component: EducationComponent },
      { path: 'experiences', component: ExperienceComponent },
      { path: 'personal-info', component: PersonalInfoComponent },

      { path: '', redirectTo: 'working-hours', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
