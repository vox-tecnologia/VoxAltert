
#### 1. Install Vox Alert globally:


```sh
$ npm i --global @voxtecnologia/alert
```

#### 2. Install Vox Alert in your project devDependencies:

```sh
$ npm i --save @voxtecnologia/alert
```

#### 3. Setup Module

Import VoxAlertModule into your app.module.

```ts
import { VoxAlertModule } from '@voxtecnologia/alert/';

@NgModule({
  ...
  imports: [
    VoxAlertModule
  ],
})
```


#### 4 . Basic Usage
Import AlertService into your app.component

```ts
import { Component } from '@angular/core';

import { VoxAlertService } from '@voxtecnologia/alert/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'app';
    private _alertService: AlertService;

    constructor(
      alertService: AlertService
    ) {
      this._alertService = alertService;
    }

    open() {
      this._alertService.openModal('AlertServiceService', 'alert title', 'success');
    }
}

```

#### 5. Setup View
Place the app-alert selector at the bottom of your app.component.html
```html

<button type="button" class="btn btn-info" (click)="open()">Create template alert</button>

<app-alert></app-alert>

```

### Alert Types
The following message types are avialable. The typess below represent the Bootstrap [alert](https://v4-alpha.getbootstrap.com/components/alerts/) classes.
* success
* info
* warning
* danger
