import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent,SortByDirective } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, SorterService, AuthenticationService, UserService, CarService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { CarComponent, CarDetailComponent, CarPaginationComponent } from './car/index';
import { ProfileComponent } from './profile/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        SortByDirective,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        CarComponent,
        CarDetailComponent,
        CarPaginationComponent,
        ProfileComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        SorterService,
        AuthenticationService,
        UserService,
        CarService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }