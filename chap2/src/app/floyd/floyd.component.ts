import { Component } from '@angular/core';
import { TriangleService } from '../triangle.service';
import { AngularPre } from './../angular-pre.directive';
@Component({
  selector: 'floyd',
  template: 
  	`<p>
  	  <input #checkbox type="checkbox" value="even">Even?<br>
	  <input #rows type="text" name="rows">
	  <button (click)="onClick(rows.value, checkbox.checked)">CLICK</button>
	</p>
	<pre AngularPre [highlightColor]="color">
	
		{{floydString}}
	</pre>
	`,
	providers:   [TriangleService],
	directives: [AngularPre]
})
export class FloydComponent {

  private floydString:string = "";
  private color:"yellow" | "red";

  constructor(private triangleService:TriangleService) {

  }

  onClick(rows:number, even:boolean){

  	if(even){
  		this.floydString = this.triangleService.evenFloydTriangle(rows);
  		this.color = "red";
  	}else{
  		this.floydString = this.triangleService.floydTriangle(rows);
  		this.color = "yellow";
  	}

  }

}
