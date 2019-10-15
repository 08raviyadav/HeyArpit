import {Component} from '@angular/core';
@Component({
selector:'stl',
template:`
<br><br><br>

<button [ngStyle]="
{
	'backgroundColor':bkclr1,
	'color ':bkclr,
	'fontWeight':wght
}
">Button</button>
<button [style.backgroundColor]="bkclr"
[style.color]="bkclr1" [style.fontWeight]="wght">
Click</button>

`

})
export class ngComponent
{
	
	bkclr="red";bkclr1="green";wght="bold";

}
