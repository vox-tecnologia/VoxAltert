import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoxAlertComponent } from './vox-alert.component';

describe('VoxAlertComponent', () => {
  let component: VoxAlertComponent;
  let fixture: ComponentFixture<VoxAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoxAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoxAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
