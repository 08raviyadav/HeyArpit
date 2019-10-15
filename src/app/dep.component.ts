import {Component} from '@angular/core';
import {DepnService} from './dep.service';
@Component({
	selector : 'arpit',
	template : `<h2></h2>
	<ul>
	<li *ngFor="let cr of courses">
	{{courses}}</li></ul>`
})


export class CoursesComponent{
	courses;
	constructor(){
	let service = new DepnService();
	this.courses = service.getService();
	}
}