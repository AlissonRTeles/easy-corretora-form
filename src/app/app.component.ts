import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApplicationDispatcherService } from './services/app.service';
import { ApplicationHttpClient } from './services/application-http-client';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private authService: AuthenticationService,
    private snackBar: MatSnackBar,
    private appDispatcherService: ApplicationDispatcherService) {

  }
  title = 'easy-corretora-form';
  private authToken: string;

  getAuth(): void {
    this.snackBar.open(`auth`);

    this.authService.getAuthenticationToken().subscribe((token) => {
      if (token) {
        this.authToken = token;
      }
    })
  }

  getCotation(): void {
    this.snackBar.open(`cotation`);

    this.appDispatcherService.getCotation().subscribe((cotation) => {
      if (cotation) {
        this.snackBar.open(cotation);
      }
    })
  }

  getProposal(): void {
    this.snackBar.open(`proposal`);

    this.appDispatcherService.getProposal().subscribe((proposal) => {
      if (proposal) {
        this.snackBar.open(proposal);

      }
    })
  }

}
