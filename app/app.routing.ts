import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { CarComponent, CarDetailComponent, CarPaginationComponent } from './car/index';
import { ProfileComponent } from './profile/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'car', component: CarComponent, canActivate: [AuthGuard] },
    { path: 'car/:id', component: CarDetailComponent, canActivate: [AuthGuard] },
    { path: 'profile', component:ProfileComponent, canActivate: [AuthGuard] },
    { path: 'carPagination', component: CarPaginationComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);