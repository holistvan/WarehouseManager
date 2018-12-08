import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

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
