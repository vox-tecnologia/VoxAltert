import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  Input
} from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs/Subscription';

import { AlertService } from './alert-service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {

  @ViewChild('modal') private content: ElementRef;

  private _subscription: Subscription;
  public show: boolean;
  public modalRef: BsModalRef;
  public body: string;
  public alert: string;
  public title: string;

  constructor(
    private modalService: BsModalService,
    private alertService: AlertService
  ) {
    this.show = false;
  }

  ngOnInit(): void {
    this._subscription = this.alertService.loaderState.subscribe(
      state => {
        if (state.show) {
          this.body = state.mBody;
          this.alert = state.mAlert;
          this.title = state.mTitle;
          this.modalRef = this.modalService.show(this.content);
          return;
        }
        this.modalRef.hide();
      }
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
