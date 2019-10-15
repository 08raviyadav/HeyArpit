import {Component} from '@angular/core';
import {Eval} from './length.service';

@Component({
	selector : 'square',
	template : `<h2>
	{{side}}
	</h2>`
})

export class Square{
	side : number;
	constructor(side : number){
	this.side= side;
	}
	AreaOfSquare() {
    return this.side * this.side;
}
}
var square = new Square(5);
var area = square.AreaOfSquare();
alert("The Area of the Square is :" + area);