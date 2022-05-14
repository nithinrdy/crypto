import {
	TestBed,
	fakeAsync,
	flushMicrotasks,
	tick,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Coinservice } from './coin.service';

describe('CoinService', () => {
	let service: Coinservice;
	let httpController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});

		service = TestBed.inject(Coinservice);
		httpController = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		// httpController.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should successfully make a GET request to the API', fakeAsync(() => {
		let prms = service.getCoins().toPromise();
		tick();

		let req = httpController.expectOne(
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
		);
		expect(req.request.method).toBe('GET');
		req.flush([
			{
				id: 'bitcoin',
				symbol: 'btc',
				name: 'Bitcoin',
				image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
				current_price: 2289817,
				market_cap: 43521268344294,
				market_cap_rank: 1,
				fully_diluted_valuation: 48002566198442,
				total_volume: 2509005977625,
				high_24h: 2401222,
				low_24h: 2267591,
				price_change_24h: -57273.3274640562,
				price_change_percentage_24h: -2.44018,
				market_cap_change_24h: -1187233672990.125,
				market_cap_change_percentage_24h: -2.6555,
				circulating_supply: 19039537.0,
				total_supply: 21000000.0,
				max_supply: 21000000.0,
				ath: 5128383,
				ath_change_percentage: -55.44192,
				ath_date: '2021-11-10T14:24:11.849Z',
				atl: 3993.42,
				atl_change_percentage: 57121.86703,
				atl_date: '2013-07-05T00:00:00.000Z',
				roi: null,
				last_updated: '2022-05-14T08:55:50.036Z',
			},
			{
				id: 'ethereum',
				symbol: 'eth',
				name: 'Ethereum',
				image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
				current_price: 158289,
				market_cap: 19056577071405,
				market_cap_rank: 2,
				fully_diluted_valuation: null,
				total_volume: 1497805526033,
				high_24h: 165979,
				low_24h: 155764,
				price_change_24h: -1925.85056309856,
				price_change_percentage_24h: -1.20204,
				market_cap_change_24h: -303688545556.5703,
				market_cap_change_percentage_24h: -1.56862,
				circulating_supply: 120772258.4365,
				total_supply: null,
				max_supply: null,
				ath: 362338,
				ath_change_percentage: -56.37798,
				ath_date: '2021-11-10T14:24:19.604Z',
				atl: 28.13,
				atl_change_percentage: 561764.09896,
				atl_date: '2015-10-20T00:00:00.000Z',
				roi: {
					times: 91.54052862007552,
					currency: 'btc',
					percentage: 9154.052862007551,
				},
				last_updated: '2022-05-14T08:56:37.964Z',
			},
		]);
		flushMicrotasks();
	}));
});
