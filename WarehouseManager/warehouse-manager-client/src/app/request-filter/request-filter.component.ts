import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'request-filter',
  templateUrl: './request-filter.component.html',
  styleUrls: ['./request-filter.component.css']
})
export class RequestFilterComponent implements OnInit {

  filterText: string = '';
  
  @Output()
  filterSubmit: EventEmitter<string> = new EventEmitter();

  @Input()
  filterName: string;

  constructor() { }

  ngOnInit() {
  }

  async filter() {
    await this.filterSubmit.emit(this.filterText);
  }
  
}
