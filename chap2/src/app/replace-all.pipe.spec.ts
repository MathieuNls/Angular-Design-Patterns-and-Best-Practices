/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ReplaceAllPipe } from './replace-all.pipe';

describe('Pipe: ReplaceAll', () => {
  it('create an instance', () => {
    let pipe = new ReplaceAllPipe();
    expect(pipe).toBeTruthy();
  });
});
