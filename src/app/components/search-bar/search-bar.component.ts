import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
	@Output() queryChangeEmitter: EventEmitter<string> = new EventEmitter();
	query: string = '';

	constructor() {}

	ngOnInit(): void {}

	emitQueryChange(): void {
		this.queryChangeEmitter.emit(this.query);
	}
}
