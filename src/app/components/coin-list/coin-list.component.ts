import { Component, OnDestroy, OnInit } from '@angular/core';
import { Coin } from './../../models/coin';
import { Subscription } from 'rxjs';
import { CoinService } from 'src/app/services/coin.service';

@Component({
	selector: 'coin-list',
	templateUrl: './coin-list.component.html',
	styleUrls: ['./coin-list.component.css'],
})
export class CoinListComponent implements OnInit, OnDestroy {
	coinListSubscription = new Subscription();
	searchQueryChangeSubscription = new Subscription();
	coinList!: Coin[];
	filteredCoinList!: Coin[];

	constructor(private coinService: CoinService) {}

	ngOnInit(): void {
		this.coinListSubscription.add(
			this.coinService.getCoins().subscribe((coinList: Coin[]) => {
				this.coinList = coinList;
				this.coinListSubscription.unsubscribe();
				this.setFilteredCoinList(this.coinService.getSearchQuery());
			})
		);
		this.searchQueryChangeSubscription.add(
			this.coinService.searchQueryChangeEmitter.subscribe(
				(query: string) => {
					this.setFilteredCoinList(query);
				}
			)
		);
	}
	setFilteredCoinList(query: string): void {
		if (this.coinList) {
			if (query === '') {
				this.filteredCoinList = this.coinList;
				return;
			} else {
				this.filteredCoinList = [];
				this.coinList.forEach((coin: Coin) => {
					if (coin.id.includes(query.toLowerCase())) {
						this.filteredCoinList.push(coin);
					}
				});
			}
		} else {
			setTimeout(() => {
				this.setFilteredCoinList(query);
			}, 1000);
		}
	}

	ngOnDestroy(): void {
		this.searchQueryChangeSubscription.unsubscribe();
	}
}
