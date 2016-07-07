import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { FloydComponent } from './app/floyd/';
import { TriangleService } from './app/triangle.service'

if (environment.production) {
  enableProdMode();
}

bootstrap(FloydComponent, [TriangleService]);

