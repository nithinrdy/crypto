import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CoinService } from 'src/app/services/coin.service';

@Component({
	selector: 'search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit, AfterViewInit {
	query: string = '';

	constructor(private coinService: CoinService) {}

	ngOnInit(): void {}
	ngAfterViewInit(): void {
		let searchBar = document.querySelector(
			'.coinSearch'
		) as HTMLInputElement;
		searchBar.addEventListener('keydown', (e) => {
			if (e.keyCode == 13) {
				this.setNewSearchQuery();
			}
		});
	}

	setNewSearchQuery(): void {
		if (window.location.href.includes('coin')) {
			let hiddenBackButton = document.querySelector(
				'.hidden-back'
			) as HTMLAnchorElement;
			hiddenBackButton.click();
		}
		this.coinService.setSearchQuery(this.query);
	}
}
