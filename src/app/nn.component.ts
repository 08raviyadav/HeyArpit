import {Component} from '@angular/core';
import {DepnService} from './dep.service';

@Component({
	selector : 'arpit',
	template : `<h2>
	{{courses}}
	</h2>`
})

/*export class CoursesComponent{
	courses;
	constructor(obj:DepnService){
	this.courses= obj.getService();
	}
}*/

export class CoursesComponent{
	courses;
	constructor(){
		let obj = new DepnService();
		obj.getService();
	}
}