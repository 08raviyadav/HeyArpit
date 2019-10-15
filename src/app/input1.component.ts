import { Component, Input } from '@angular/core';
@Component({
	selector : 'bank-account',
	template : `
	Bank Name: {{bankName}}
	Account Id : {{id}}
	`
}) 
export class BankAccount {
	@Input() bankName : string;
	@Input('account-id') id : string;
}
@Component({
	selector : 'app',
	template : `
	<bank-account bankName="RBC"
	account-id="4747"></bank-account>
	`
})
export class App{}