import {Component} from '@angular/core';

@Component({
	selector : 'arpit1',
	template : `<h1>{{section}}
    <ol>
    <li *ngFor='let crs of courses'>
    {{crs}}
    </ol>
	</h1>`
})

export class MyProj
{
	section = "Section is DE045";
	courses = ['CAP916','CAP917','CAP918'];
}