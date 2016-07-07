/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AngularPre } from './angular-pre.directive';

describe('AngularPre Directive', () => {
  it('should create an instance', () => {
    let directive = new AngularPre();
    expect(directive).toBeTruthy();
  });
});
