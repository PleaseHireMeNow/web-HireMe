import { TestBed } from '@angular/core/testing';

import { NewOrPrevSessionService } from './new-or-prev-session.service';

describe('NewOrPrevSessionService', () => {
  let service: NewOrPrevSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewOrPrevSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
