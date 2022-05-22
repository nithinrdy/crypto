import { Coinservice } from './services/coin.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CoinListComponent } from './components/coin-list/coin-list.component';
import { CoinItemComponent } from './components/coin-item/coin-item.component';
@NgModule({
	declarations: [AppComponent, SearchBarComponent, CoinListComponent, CoinItemComponent],
	imports: [BrowserModule, HttpClientModule, FormsModule],
	providers: [HttpClient, Coinservice],
	bootstrap: [AppComponent],
})
export class AppModule {}
