import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VoxAlertModule } from './alert/vox-alert.module';
import { VoxAlertConfirmModule} from './alert-confirm/vox-alert-confirm.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VoxAlertModule,
    VoxAlertConfirmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
