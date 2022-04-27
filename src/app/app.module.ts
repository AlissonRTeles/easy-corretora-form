import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthenticationService } from './services/authentication.service';
import { ApplicationDispatcherService } from './services/app.service';
import { DispatcherService } from './services/dispatcher.service';
import { ApplicationHttpClient } from './services/application-http-client';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [
    ApplicationDispatcherService,
    AuthenticationService,
    DispatcherService,
    ApplicationHttpClient  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
