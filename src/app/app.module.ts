import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SameSiteInterceptor } from 'src/shared/auth/set-cookie';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'src/shared/auth/auth-guard';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AuthGuard,
    // { provide: HTTP_INTERCEPTORS, useClass: SameSiteInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
