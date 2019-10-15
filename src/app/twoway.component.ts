import {Component} from '@angular/core';
@Component({
selector:'twb',
template:`

<input [(ngModel)] = "x" (keyup.enter)="function1()" />
`

})
export class TWB
{
	x = "D1610";

	function1()
	{
	console.log("Hey! "+this.x);
	}
}