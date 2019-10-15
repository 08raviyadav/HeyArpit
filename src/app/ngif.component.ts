import {Component} from '@angular/core';
@Component({
selector:'array',
template:`


<div *ngIf = "size.length>=5 && size.length<=8">
String is {{size}}.<br>
Value is acceptable.
</div>

<div *ngIf = "size.length<5 || size.length>8">
String is {{size}}.<br>
Value is inacceptable.
</div>

<div *ngIf = "age>=20 && age<=50">
Age is {{age}}.<br>
Candidate is eligible.
</div>

<div *ngIf = "age<20 || age>50">
Age is {{age}}.<br>
Candidate is not eligible.
</div>

`

})
export class DrctvComponent
{
	size = "Arpit";
	age = 51;

}