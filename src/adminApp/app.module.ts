import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginService } from './login.service';
import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard.component';
import { ParserService } from './parser/parser.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
		LoginComponent,
		DashboardComponent
  ],
	providers: [
		LoginService,
		ParserService
	],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
