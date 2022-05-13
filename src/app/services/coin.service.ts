import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coin } from '../models/coin';

@Injectable({
	providedIn: 'root',
})
export class Coinservice {
	constructor(private httpClient: HttpClient) {}

	coinListUrl =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false';

	getCoins(): Observable<Coin[]> {
		return this.httpClient.get<Coin[]>(this.coinListUrl);
	}
}
