/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FloydComponent } from './floyd.component';

describe('Component: Floyd', () => {
  it('should create an instance', () => {
    let component = new FloydComponent();
    expect(component).toBeTruthy();
  });
});
