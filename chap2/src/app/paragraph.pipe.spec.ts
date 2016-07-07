/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ParagraphPipe } from './paragraph.pipe';

describe('Pipe: Paragraph', () => {
  it('create an instance', () => {
    let pipe = new ParagraphPipe();
    expect(pipe).toBeTruthy();
  });
});
