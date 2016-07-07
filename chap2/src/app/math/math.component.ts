import { Component } from '@angular/core';
import { FloydComponent } from './../floyd/floyd.component';

@Component({
  selector: 'math',
  template: `
  	<h1> Welcome in the Math side</h1>
  	<floyd></floyd>
  `,
  directives: [FloydComponent]
})
export class MathComponent {

  constructor() {}

}
