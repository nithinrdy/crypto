import { Coinservice } from './services/coin.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
@NgModule({
	declarations: [AppComponent, SearchBarComponent],
	imports: [BrowserModule, HttpClientModule],
	providers: [HttpClient, Coinservice],
	bootstrap: [AppComponent],
})
export class AppModule {}
