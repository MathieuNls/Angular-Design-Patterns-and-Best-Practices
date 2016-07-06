import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FloydComponent } from './app/floyd/';

if (environment.production) {
  enableProdMode();
}

bootstrap(FloydComponent);

