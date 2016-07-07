/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TriangleService } from './triangle.service';

describe('Triangle Service', () => {
  beforeEachProviders(() => [TriangleService]);

  it('should ...',
      inject([TriangleService], (service: TriangleService) => {
    expect(service).toBeTruthy();
  }));
});
