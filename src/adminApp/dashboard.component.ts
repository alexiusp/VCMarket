import { Component, OnInit } from '@angular/core';
import { Parser } from './parser/parser';
import { ParserService } from './parser/parser.service';

@Component({
  selector: 'dashboard-page',
  templateUrl: 'adminApp/html/dashboard.html'
})
export class DashboardComponent implements OnInit {
	editParser : Parser;
	parserList : Parser[];
	constructor(public service: ParserService) {
		this.editParser = undefined;
	}
	ngOnInit(): void {
		this.service.getParsers().then(parsers => this.parserList = parsers);
	}
	addParser() {
		console.log("addParser clicked!");
	}
}
