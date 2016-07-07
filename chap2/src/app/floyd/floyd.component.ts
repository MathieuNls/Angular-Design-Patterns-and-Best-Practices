import { Component } from '@angular/core';
import { TriangleService } from '../triangle.service';

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
	`,
	providers:   [TriangleService]
})
export class FloydComponent {

  private floydString:string = "";

  constructor(private triangleService:TriangleService) {

  }

  onClick(rows:number){

  	this.floydString = this.triangleService.evenFloydTriangle(rows);
  }

}
