import { Routes } from '@angular/router';

import { BlankLayoutComponent } from './shared/Components/layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './shared/Components/layouts/auth-layout/auth-layout.component';
import { DoctorLayoutComponent } from './shared/Components/layouts/doctor-layout/doctor-layout.component';
import { UserLayoutComponent } from './shared/Components/layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './shared/Components/layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./views/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: 'doctor',
    component: DoctorLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin-dash',
        loadChildren: () =>
          import('./views/admin-dash/admin-dash.module').then(
            (m) => m.AdminDashModule
          ),
      },
    ],
  },
  // { path: '', redirectTo: 'doctor/dashboard', pathMatch: 'full' },0

  {
    path: 'user',
    component: UserLayoutComponent,
    // children: [
    //   {
    //     path: 'notes',
    //     loadChildren: () =>
    //       import('').then((m) => m.NotesModule),
    //   },
    // ],
  },
];
