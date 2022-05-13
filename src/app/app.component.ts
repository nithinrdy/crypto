import { Component, OnInit } from '@angular/core';
import { Coinservice } from './services/coin.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	constructor(private coinService: Coinservice) {}

	ngOnInit(): void {
		this.coinService.getCoins().subscribe((coinList) => {
			console.log(coinList);
		});
	}
}
