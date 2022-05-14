import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable } from 'rxjs';
import { Coin } from './models/coin';

import { AppComponent } from './app.component';
import { Coinservice } from './services/coin.service';

class MockCoinService {
	private dummyCoinObjectArray: Coin[] = [
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
	];

	getCoins(): Observable<Coin[]> {
		return of(this.dummyCoinObjectArray);
	}
}

describe('AppComponent', () => {
	let fixture;
	let component: AppComponent;
	let coinService: Coinservice;

	const dummyCoinObjectArray: Coin[] = [
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
	];

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			declarations: [AppComponent],
			providers: [
				{
					provide: Coinservice,
					useClass: MockCoinService,
				},
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;

		coinService = TestBed.inject(Coinservice);
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});

	it('should subscribe to coin fetcher function upon initialization', () => {
		const addSubscriptionSpy = spyOn(
			component.directiveSubscriptions,
			'add'
		);
		component.ngOnInit();

		expect(addSubscriptionSpy).toHaveBeenCalled();
	});

	it('should obtain coin list when the observable pushes it to the subscription', () => {
		let obs = coinService.getCoins();
		component.ngOnInit();

		obs.subscribe(() => {
			expect(component.coinList).toEqual(dummyCoinObjectArray);
		});
	});

	it('should unsubscribe upon component destruction', () => {
		const unsubscribeSpy = spyOn(
			component.directiveSubscriptions,
			'unsubscribe'
		);
		component.ngOnDestroy();

		expect(unsubscribeSpy).toHaveBeenCalled();
	});
});
