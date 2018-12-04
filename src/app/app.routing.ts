import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from '@app/components/home/home.component';
import {LoginComponent} from '@app/components/login/login.component';
import {RegisterComponent} from '@app/components/register/register.component';
import {AuthGuard} from '@app/guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);
