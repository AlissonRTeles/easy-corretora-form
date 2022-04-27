import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationDispatcherService } from './services/app.service';
import { ApplicationHttpClient } from './services/application-http-client';
import { AuthenticationService } from './services/authentication.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
