import {Component} from '@angular/core';
import {Eval} from './length.service';

@Component({
	selector : 'rectangle',
	template : `<h2>
	{{rect}}
	</h2>`
})

export class Rect{
	l : number;
	b : number;
	constructor(l : number, b : number){
	this.l= l;
	this.b= b;
	}
	AreaOfRectangle() {
    return this.l * this.b;
}
}
var rect = new Rect(5,10);
var area = rect.AreaOfRectangle();
alert("The Area of the Rectangle is :" + area);