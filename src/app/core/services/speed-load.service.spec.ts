import { TestBed } from '@angular/core/testing';

import { SpeedLoadService } from './speed-load.service';

describe('SpeedLoadService', () => {
  let service: SpeedLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeedLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
