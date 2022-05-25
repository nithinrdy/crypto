import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { map } from 'rxjs';
import { tap } from 'rxjs';

@Component({
	selector: 'app-coin-detail',
	templateUrl: './coin-detail.component.html',
	styleUrls: ['./coin-detail.component.css'],
})
export class CoinDetailComponent implements OnInit {
	constructor(private route: ActivatedRoute) {}

	coinSymbol!: string;

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
			.subscribe((id) => {});
	}
}
