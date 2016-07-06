import { Component } from '@angular/core';

@Component({
  selector: 'floyd',
  template: 
  	`<p>
	  <input #rows type="text" name="rows">
	  <button (click)="onClick(rows.value)">CLICK</button>
	</p>
	<pre>
		{{floydString}}
	</pre>
	`
})
export class FloydComponent {

  private floydString:string = "";
  private static startOfAlphabet = 97;

  constructor() {

  }

  onClick(rows:number){

  	let currentLetter = FloydComponent.startOfAlphabet;

  	for (let i = 0; i < rows; i++) {
  		for (let j = 0; j < i; j++) {
  			this.floydString += String.fromCharCode(currentLetter) + " ";
  			currentLetter++;
  		}
  		this.floydString += "\n\r";
  	}
  }

}
