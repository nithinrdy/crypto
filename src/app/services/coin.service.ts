import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Coin } from '../models/coin';

@Injectable({
	providedIn: 'root',
})
export class CoinService {
	constructor(private httpClient: HttpClient) {}
	searchQueryChangeEmitter: EventEmitter<string> = new EventEmitter();
	private searchQuery: string = '';
	private coinList!: Coin[];
	private coinListUrl =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false';

	getCoins(): Observable<Coin[]> {
		if (this.coinList) {
			return of(this.coinList);
		} else {
			let coinFetcher = this.httpClient.get<Coin[]>(this.coinListUrl);
			coinFetcher.subscribe((coinList: Coin[]) => {
				this.coinList = coinList;
			})
			return coinFetcher;
		}
	}

	setSearchQuery(query: string): void {
		this.searchQuery = query;
		this.searchQueryChangeEmitter.emit(this.searchQuery);
	}

	getSearchQuery(): string {
		return this.searchQuery;
	}
}
