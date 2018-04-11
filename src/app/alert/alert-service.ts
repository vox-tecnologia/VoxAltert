import { Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {

  private _loaderSubject: Subject<any>;

  public loaderState: any;

  constructor() {
    this._loaderSubject = new Subject();
    this.loaderState = this._loaderSubject.asObservable();
  }

  /**
   *
   *
   * @param [textMessage] message that will be displayed in the modal body
   * @param [title] title that will be displayed at the top of the
   * @param [alert] type of alert success || danger || warning || info
   * @memberof AlertService
   */
  public openModal(textMessage?: string, title?: string, alert?: string): void {
    this._loaderSubject.next({
      show: true,
      mBody: textMessage,
      mTitle: title,
      mAlert: alert
    });
  }

  public hideModal(): void {
    this._loaderSubject.next({ show: false });
  }
}
