import { TestBed, inject } from '@angular/core/testing';

import { VoxAlertService } from './vox-alert-service';

describe('AlertServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoxAlertService]
    });
  });

  it('should be created', inject([VoxAlertService], (service: VoxAlertService) => {
    expect(service).toBeTruthy();
  }));
});
