import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Chap2AppComponent } from '../app/chap2.component';

beforeEachProviders(() => [Chap2AppComponent]);

describe('App: Chap2', () => {
  it('should create the app',
      inject([Chap2AppComponent], (app: Chap2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'chap2 works!\'',
      inject([Chap2AppComponent], (app: Chap2AppComponent) => {
    expect(app.title).toEqual('chap2 works!');
  }));
});
