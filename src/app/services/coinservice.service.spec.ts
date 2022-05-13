import { TestBed } from '@angular/core/testing';

import { CoinserviceService } from './coinservice.service';

describe('CoinserviceService', () => {
	let service: CoinserviceService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(CoinserviceService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
