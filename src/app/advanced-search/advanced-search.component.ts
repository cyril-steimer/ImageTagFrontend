import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ImageQuery, TagImageQuery } from '../image';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  @Output() search: EventEmitter<ImageQuery> = new EventEmitter<ImageQuery>()

  searchKeys = [
    {name: "Tag", type: "string"}
  ]

  searches: Search[] = []

  constructor() { }

  ngOnInit() {
  }

  addSearch(key: SearchKey, value: any) {
    this.searches.push({key: key, value: value})
  }

  emitSearch() {
    let query = this.createQuery()
    this.search.emit(query)
  }

  private createQuery(): ImageQuery {
    for (let search of this.searches) {
      return new TagImageQuery(search.value)
    }
    return null
  }
}

class SearchKey {
  name: string
  type: string
}

class Search {
  key: SearchKey
  value: any
}
