import {Component} from '@angular/core';
@Component({
selector:'stl',
template:`
<div [ngSwitch]="section">
<div *ngSwitchCase="'D1501'" > Fourth Year </div>
<div *ngSwitchCase="'D1401'" > Fifth Year </div>
</div>
`

})
export class SwtchComponent
{
	
	section="D1501";

}
