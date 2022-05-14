import { Component, OnInit, OnDestroy } from '@angular/core';
import { Coin } from './models/coin';
import { Coinservice } from './services/coin.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
	directiveSubscriptions = new Subscription();
	constructor(private coinService: Coinservice) {}

	coinList!: Coin[];

	ngOnInit(): void {
		this.directiveSubscriptions.add(
			this.coinService.getCoins().subscribe((coinList) => {
				this.coinList = coinList;
			})
		);
	}

	ngOnDestroy(): void {
		this.directiveSubscriptions.unsubscribe();
	}
}
