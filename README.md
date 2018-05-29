
#### 1. Install Vox Alert globally:


```sh
$ npm i --global @voxtecnologia/alert
```

#### 2. Install Vox Alert in your project devDependencies:

```sh
$ npm i --save @voxtecnologia/alert
```

#### 3. Setup Module

Import VoxAlertModule or VoxAlertConfirmModule into your app.module.

```ts
import { VoxAlertModule, VoxAlertConfirmModule } from '@voxtecnologia/alert';

@NgModule({
  ...
  imports: [
    VoxAlertModule,
    VoxAlertConfirmModule
  ],
})
```

#### 4 . Basic Usage
Import VoxAlertService or VoxAlertConfirmService into your app.component

```ts
import { Component } from '@angular/core';

import { VoxAlertService, VoxAlertConfirmService } from '@voxtecnologia/alert';
import { EventEmitterService } from '@voxtecnologia/alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'app';
    
    constructor(
      private alertService: VoxAlertService,
      private confirmService: VoxAlertConfirmService
    ) {
      
      EventEmitterService.get('confirm').subscribe(data => console.log(data));
      EventEmitterService.get('close').subscribe(data => console.log(data));
    }
    
    open() {
      this.alertService.openModal('message', 'title', 'alert');
    }

    confirm() {
      this.confirmService.openModalConfirme('message', 'title', 'alert', 'size');
    }
}

```

#### 5. Setup View
Place the app-alert or app-vox-alert-confirm selector at the bottom of your app.component.html
```html

<button type="button" class="btn btn-info" (click)="open()">Alert</button>
<button type="button" class="btn btn-danger" (click)="confirm()">confirm</button>

<app-alert></app-alert>

<app-vox-alert-confirm
  ok="teste confirm"
  close="texto close">
</app-vox-alert-confirm>

```

#### 6. Alert Types
The following message types are avialable. The typess below represent the Bootstrap [alert](https://v4-alpha.getbootstrap.com/components/alerts/) classes.
* success
* info
* warning
* danger

#### 7. Usage and options

Alert Types | openModalConfirme |  Type      | Exemples                                 | Optional        | Options Default        
---         |---                |---         |---                                       |---              |---
success     | message           | `string`   | `txt`                                    | Yes             | No
info        | title             | `string`   | `txt`                                    | Yes             | No
warning     | alert             | `string`   | `success || info || warning || danger`   | Yes             | No
danger      | size              | `string`   | `sm || lg`                               | Yes             | No

