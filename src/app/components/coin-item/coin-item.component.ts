import { Component, Input, OnInit } from '@angular/core';
import { Coin } from './../../models/coin';

@Component({
	selector: 'coin-item',
	templateUrl: './coin-item.component.html',
	styleUrls: ['./coin-item.component.css'],
})
export class CoinItemComponent implements OnInit {
	@Input() coinInstance!: Coin;
	constructor() {}

	ngOnInit(): void {}
}
