import {Component} from '@angular/core';
import {Eval} from './length.service';

@Component({
	selector : 'circle',
	template : `<h2>
	{{radius}}
	</h2>`
})

export class Circle{
	radius : number;
	constructor(radius : number){
	this.radius= radius;
	}
	AreaOfCircle() {
    return 3.14 * this.radius * this.radius;

}
}
var circle = new Circle(5);
var area = circle.AreaOfCircle();
alert("The Area of the Circle is :" + area);