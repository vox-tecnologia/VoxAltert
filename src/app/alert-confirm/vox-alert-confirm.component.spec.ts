import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoxAlertConfirmComponent } from './vox-alert-confirm.component';

describe('AlertConfirmComponent', () => {
  let component: VoxAlertConfirmComponent;
  let fixture: ComponentFixture<VoxAlertConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoxAlertConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoxAlertConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
