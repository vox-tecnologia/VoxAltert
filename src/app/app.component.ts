import { Component } from '@angular/core';

import { AlertService } from './alert/alert-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'app';

    constructor(
      private alertService: AlertService
    ) {

    }

    open() {
      this.alertService.openModal('AlertServiceService', 'Modal title', 'success');
    }
}
