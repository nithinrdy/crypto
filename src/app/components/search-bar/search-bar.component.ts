import { Component, EventEmitter, OnInit, Output, AfterViewInit } from '@angular/core';

@Component({
	selector: 'search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit, AfterViewInit {
	@Output() queryChangeEmitter: EventEmitter<string> = new EventEmitter();
	query: string = '';

	constructor() {}

	ngOnInit(): void {}
  ngAfterViewInit(): void {
    let searchBar = document.querySelector('.coinSearch') as HTMLInputElement;
		searchBar.addEventListener('keydown', (e) => {
			if (e.keyCode == 13) {
        this.emitQueryChange();
      }
		})
  }

	emitQueryChange(): void {
		this.queryChangeEmitter.emit(this.query);
	}
}
