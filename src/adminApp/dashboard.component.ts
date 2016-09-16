import { Component } from '@angular/core';
import { Parser } from './parser/parser';
import { ParserService } from './parser/parser.service';

@Component({
  selector: 'dashboard-page',
  templateUrl: 'adminApp/html/dashboard.html'
})
export class DashboardComponent {
	editParser : Parser;
	parserList : Parser[];
	constructor(public service: ParserService) {
		this.editParser = undefined;
	}
	addParser() {
		console.log("addParser clicked!");
	}
}
