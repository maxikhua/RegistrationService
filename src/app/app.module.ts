import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AlertComponent} from './components/alert/alert.component';
import {HeaderComponent} from './components/layout/header/header.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {ContentComponent} from './components/layout/content/content.component';
import {HomeComponent} from '@app/components/home/home.component';
import {LoginComponent} from '@app/components/login/login.component';
import {RegisterComponent} from '@app/components/register/register.component';
import {fakeBackendProvider} from '@app/helpers/fake-backend';
import {JwtInterceptor} from '@app/helpers/jwt.interceptor';
import {ErrorInterceptor} from '@app/helpers/error.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
    ,
    HeaderComponent,
    FooterComponent,
    ContentComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
