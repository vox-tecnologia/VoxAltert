import { Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { EventEmitterService } from './event-emitter.service';
@Injectable()
export class VoxAlertConfirmService {

  private _loaderSubject: Subject<any>;
  private _confirme: boolean;
  public loaderState: any;


  constructor() {
    this._loaderSubject = new Subject();
    this.loaderState = this._loaderSubject.asObservable();
    this._confirme = false;
  }

  /**
   *
   * @param [message] message that will be displayed in the modal body
   * @param [title] title that will be displayed at the top of the
   * @param [alert] type of alert || success || danger || warning || info
   * @param [size] size of modal || sm || lg
   * @memberof VoxAlertService
   */
  public openModalConfirme(message?: string, title?: string, alert?: string, size?: string): void {
    this._loaderSubject.next({
      show: true,
      body: message,
      title: title,
      alert: alert,
      size: size
    });
  }

}
