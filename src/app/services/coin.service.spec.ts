import { TestBed } from '@angular/core/testing';

import { Coinservice } from './coin.service';

describe('CoinserviceService', () => {
	let service: Coinservice;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(Coinservice);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
