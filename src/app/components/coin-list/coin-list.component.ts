import {
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';
import { Coin } from './../../models/coin';

@Component({
	selector: 'coin-list',
	templateUrl: './coin-list.component.html',
	styleUrls: ['./coin-list.component.css'],
})
export class CoinListComponent implements OnInit, OnChanges {
	@Input() coinList!: Coin[];
	@Input() query!: string;

	filteredCoinList!: Coin[];

	constructor() {}

	ngOnInit(): void {}
	ngOnChanges(changes: SimpleChanges): void {
		this.filteredCoinList = [];
		if (this.query === '') {
			this.filteredCoinList = this.coinList;
		} else {
			this.coinList.forEach((coin: Coin) => {
				if (coin.id.includes(this.query.toLowerCase())) {
					this.filteredCoinList.push(coin);
				}
			});
		}
	}
}
