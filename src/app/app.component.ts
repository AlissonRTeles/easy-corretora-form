import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApplicationDispatcherService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private snackBar: MatSnackBar,
    private appDispatcherService: ApplicationDispatcherService) {

  }
  title = 'easy-corretora-form';
  private authToken: string;

  getAuth(): void {
    this.appDispatcherService.getToken().subscribe((token) => {
      if (token) {
        this.authToken = token;
      }
    })
  }

  getCotation(): void {
    this.appDispatcherService.getCotation().subscribe((cotation) => {
      if (cotation) {
        this.snackBar.open(cotation);
      }
    })
  }

  getProposal(): void {
    this.appDispatcherService.getProposal().subscribe((proposal) => {
      if (proposal) {
        this.snackBar.open(proposal);

      }
    })
  }

}
