import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  Input
} from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Subscription } from 'rxjs';

import { VoxAlertConfirmService } from './vox-alert-confirm-service';
import { EventEmitterService } from './event-emitter.service';

@Component({
  selector: 'app-vox-alert-confirm',
  templateUrl: './vox-alert-confirm.component.html',
  styleUrls: ['./vox-alert-confirm.component.css']
})
export class VoxAlertConfirmComponent implements OnInit, OnDestroy {

  @ViewChild('modal') private content: ElementRef;

  @Input() public close: string;
  @Input() public ok: string;

  private _subscription: Subscription;
  public show: boolean;
  public modalRef: NgbModalRef;
  public body: string;
  public alert: string;
  public title: string;

  constructor(
    private modalService: NgbModal,
    private confirmService: VoxAlertConfirmService
  ) {
    this.show = false;
    this.close = 'Close';
    this.ok = 'Confirmer';
  }

  ngOnInit(): void {
    this._subscription = this.confirmService.loaderState.subscribe(state => {
      if (state.show) {
        this.body = state.body;
        this.alert = state.alert;
        this.title = state.title;
        this.modalRef = this.modalService.open(this.content, {size: state.size});
      }
    });
  }

  hide() {
    this.modalRef.close();
    EventEmitterService.get('close').emit({
      confirm: true,
      text: 'btn close'
    });
  }

  confirme() {
    this.modalRef.close();
    EventEmitterService.get('confirm').emit({
      confirm: true,
      text: 'btn confirme'
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
