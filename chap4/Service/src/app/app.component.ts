import { Component } from '@angular/core';

import { SingletonService } from './singleton.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private singleton:SingletonService){
    singleton.doStuff();

    console.log(new Date().getTime());
  }
}
