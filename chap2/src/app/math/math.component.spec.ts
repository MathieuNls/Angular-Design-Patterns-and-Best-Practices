/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MathComponent } from './math.component';

describe('Component: Math', () => {
  it('should create an instance', () => {
    let component = new MathComponent();
    expect(component).toBeTruthy();
  });
});
