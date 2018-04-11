import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AlertComponent } from './alert.component';
import { AlertService } from './alert-service';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [AlertComponent],
  exports: [AlertComponent],
  providers: [AlertService]
})
export class AlertModule { }
