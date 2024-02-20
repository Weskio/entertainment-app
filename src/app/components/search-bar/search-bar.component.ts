import { Component, Input } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  searchKey: string = '';

  constructor(private searchService: SearchService) {}

  ngOnInit(){
  }

  filterShows() {
    this.searchService.searchUpdate(this.searchKey)
  }

    @Input() placeholder!: string;

}
