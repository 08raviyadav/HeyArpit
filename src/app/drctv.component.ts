import {Component} from '@angular/core';
@Component({
selector:'array',
template:`


<div *ngIf = "arr.length>0">
Array has {{arr.length}} elements.<br>
Elements are {{arr}}.
</div>

<div *ngIf = "arr.length==0">
Array is empty.
</div>

`

})
export class DrctvComponent
{
	arr = [1,2,3,4,5,6];

}