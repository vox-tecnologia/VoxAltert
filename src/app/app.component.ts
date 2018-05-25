import { Component, OnInit } from '@angular/core';

import { VoxAlertService } from './alert/vox-alert-service';

import { VoxAlertConfirmService } from './alert-confirm/vox-alert-confirm-service';
import { EventEmitterService } from './alert-confirm/event-emitter.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'app';

    constructor(
      private alertService: VoxAlertService,
      private confirmService: VoxAlertConfirmService
    ) {
      EventEmitterService.get('confirm').subscribe(data => console.log(data));
      EventEmitterService.get('close').subscribe(data => console.log(data));
    }

    open() {
      this.alertService.openModal('alertService', 'Modal title', 'success');
    }

    confirm() {
      this.confirmService.openModalConfirme('confirmService', 'Modal title', 'danger');
    }

     teste() {

     }
}
