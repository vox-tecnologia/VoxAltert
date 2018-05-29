import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { VoxAlertConfirmComponent } from './vox-alert-confirm.component';
import { VoxAlertConfirmService } from './vox-alert-confirm-service';
import { EventEmitterService } from './event-emitter.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgbModalModule.forRoot()
  ],
  declarations: [ VoxAlertConfirmComponent ],
  exports: [ VoxAlertConfirmComponent ],
  providers: [ VoxAlertConfirmService, EventEmitterService ]
})
export class VoxAlertConfirmModule { }
