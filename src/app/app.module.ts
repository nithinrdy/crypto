import { CoinService } from './services/coin.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CoinListComponent } from './components/coin-list/coin-list.component';
import { CoinItemComponent } from './components/coin-item/coin-item.component';
import { CoinDetailComponent } from './components/coin-detail/coin-detail.component';

const appRoutes = [
	{ path: 'coin/:id', component: CoinDetailComponent },
	{ path: '', component: CoinListComponent },
];
@NgModule({
	declarations: [
		AppComponent,
		SearchBarComponent,
		CoinListComponent,
		CoinItemComponent,
		CoinDetailComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(appRoutes),
	],
	providers: [HttpClient, CoinService],
	bootstrap: [AppComponent],
})
export class AppModule {}
