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
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false';

	getCoins(): Observable<Coin[]> {
		if (this.coinList) {
			return of(this.coinList);
		} else {
			let coinListObervable = this.httpClient.get<Coin[]>(
				this.coinListUrl
			);
			coinListObervable.subscribe((coinList: Coin[]) => {
				this.coinList = coinList;
			});
			return coinListObervable;
		}
	}

	getCoinDetails(symbol: string): Coin | undefined {
		if (this.coinList) {
			return this.coinList.filter((coin: Coin) => {
				return coin.symbol === symbol;
			})[0];
		}
		this.getCoins().subscribe(() => {
			return this.getCoinDetails(symbol);
		});
		return undefined;
	}

	setSearchQuery(query: string): void {
		this.searchQuery = query;
		this.searchQueryChangeEmitter.emit(this.searchQuery);
	}

	getSearchQuery(): string {
		return this.searchQuery;
	}
}
