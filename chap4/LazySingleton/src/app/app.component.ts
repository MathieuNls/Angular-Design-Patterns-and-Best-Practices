import { Component } from '@angular/core';

import {MySingleton} from './singleton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(){
    MySingleton.getInstance().doStuff();

    console.log(new Date().getTime());
  }
}
