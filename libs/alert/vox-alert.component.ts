import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  Input
} from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Subscription } from 'rxjs/Subscription';
import { VoxAlertService } from './vox-alert-service';

@Component({
  selector: 'app-alert',
  templateUrl: './vox-alert.component.html',
  styleUrls: ['./vox-alert.component.css']
})
export class VoxAlertComponent implements OnInit, OnDestroy {
  @ViewChild('modal') private content: ElementRef;

  private _subscription: Subscription;
  public show: boolean;
  public modalRef: NgbModalRef;
  public body: string;
  public alert: string;
  public title: string;

  constructor(
    private modalService: NgbModal,
    private alertService: VoxAlertService
  ) {
    this.show = false;
  }

  ngOnInit(): void {
    this._subscription = this.alertService.loaderState.subscribe(state => {
      if (state.show) {
        this.body = state.body;
        this.alert = state.alert;
        this.title = state.title;
        this.modalRef = this.modalService.open(this.content, {size: state.size});
      }
    });
  }

  close() {
    this.modalRef.dismiss();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
