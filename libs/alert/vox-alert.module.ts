import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { VoxAlertComponent } from './vox-alert.component';
import { VoxAlertService } from './vox-alert-service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgbModalModule.forRoot()
  ],
  declarations: [ VoxAlertComponent ],
  exports: [ VoxAlertComponent ],
  providers: [ VoxAlertService ]
})
export class VoxAlertModule { }
