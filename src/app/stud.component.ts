import { Component, Input } from '@angular/core';
@Component({
	selector : 'stud-accn',
	template : `
	Student Name: {{studName}}
	Student Id : {{id}}
	`
}) 
export class StudAccount {
	@Input() studName : string;
	@Input('regn-no') id : string;
}
@Component({
	selector : 'app',
	template : `
	<stud-accn studName="Arpit"
	regn-no="11716879"></stud-accn>
	`
})
export class App{}