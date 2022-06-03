import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { tap } from 'rxjs';
import { Coin } from 'src/app/models/coin';
import { CoinService } from 'src/app/services/coin.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-coin-detail',
	templateUrl: './coin-detail.component.html',
	styleUrls: ['./coin-detail.component.css'],
})
export class CoinDetailComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private coinService: CoinService,
		private router: Router
	) {}

	coinSymbol!: string;
	coinDetails: Coin | undefined;
	imgUrl!: string;

	ngOnInit(): void {
		this.route.paramMap
			.pipe(
				map((params) => params.get('id')),
				tap((id) =>
					id
						? (this.coinSymbol = id)
						: (this.coinSymbol = 'undefined')
				)
			)
			.subscribe((id) => {
				this.coinDetails = this.coinService.getCoinDetails(
					this.coinSymbol
				);
				if (!this.coinDetails) {
					this.router.navigate(['']);
				}
			});
		if (!this.coinDetails) {
			return;
		}
		this.imgUrl = this.coinDetails.image;
	}
}
