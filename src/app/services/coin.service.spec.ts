import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Coinservice } from './coin.service';

describe('CoinserviceService', () => {
	let service: Coinservice;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		}).compileComponents();
	}));

	beforeEach(() => {
		service = TestBed.inject(Coinservice);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
