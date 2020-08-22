import { TestBed } from '@angular/core/testing';

import { ConvertUrlInterceptor } from './convert-url.interceptor';

describe('ConvertUrlInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ConvertUrlInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ConvertUrlInterceptor = TestBed.inject(ConvertUrlInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
