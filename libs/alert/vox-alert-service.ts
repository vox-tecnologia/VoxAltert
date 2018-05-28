import { Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class VoxAlertService {

  private _loaderSubject: Subject<any>;
  private _hiderSubject: Subject<any>;

  public loaderState: any;
  public hiderState: any;

  constructor() {
    this._loaderSubject = new Subject();
    this._hiderSubject = new Subject();
    this.loaderState = this._loaderSubject.asObservable();
    this.hiderState = this._hiderSubject.asObservable();
  }

  /**
   *
   * @param [message] message that will be displayed in the modal body
   * @param [title] title that will be displayed at the top of the
   * @param [alert] type of alert || success || danger || warning || info
   * @param [size] size of modal || sm || lg
   * @memberof VoxAlertService
   */
  public openModal(message?: string, title?: string, alert?: string, size?: string): void {
    this._loaderSubject.next({
      show: true,
      body: message,
      title: title,
      alert: alert,
      size: size
    });
  }

  public hideModal(param?: any): void {
    this._hiderSubject.next({ show: param });
  }
}
