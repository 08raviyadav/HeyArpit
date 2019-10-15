import {Component} from '@angular/core';
@Component({
selector:'twb',
template:`

Name : <input #textbox1 [(ngModel)] = "x"/>
<button (click)="function1(textbox1.value)">ChangeName</button>
<button (click)="x=''">Clear</button><br><br>

Contact : <input [(ngModel)] = "y" (keyup.enter)="function2()" />
<button (click)="function2()">ChangeContact</button><br><br>

Expertise : <input [(ngModel)] = "a" (keyup.enter)="function3()" />
<button (click)="function3()">ChangeExpertise</button><br><br>

Experice : <input [(ngModel)] = "b" (keyup.enter)="function4()" />
<button (click)="function4()">ChangeExperience</button><br><br>

<h2>Log <button (click)="log=''">Clear</button></h2>
        <pre>{{log}}</pre>

`

})
export class TWB
{
	x = "Arpit";
    y = "9998887776";
    a = "Python";
    b = "3 years";
    log = "";
	function1(value : string) : void {
    console.log("Text changed to "+this.log);
  }
	
	function2()
	{
	console.log("Hey! "+this.y);
	}
	function3()
	{
	console.log("Hey! "+this.a);
	}
	function4()
	{
	console.log("Hey! "+this.b);
	}
}