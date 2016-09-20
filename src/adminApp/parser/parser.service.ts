import { Injectable } from '@angular/core';
import { Parser } from './parser';

@Injectable()
export class ParserService {
	getHeroes(): Parser[] {
		console.log("getHeroes");
		let parsers : Parser[] = [];
		for(let i = 0; i < 3; i++) {
			let p = new Parser();
			p.city = "vMoscow";
			p.login = "Test" + i;
			p.password = "asd";
			p.timeout = 1000;
			parsers.push(p);
		}
		console.log("getHeroes.result=", parsers);
    return parsers;
  }
	getParsers(): Promise<Parser[]> {

		return new Promise<Parser[]>(resolve =>
    setTimeout(resolve, 2000)) // delay 2 seconds
    .then(() => this.getHeroes());
	}
}
