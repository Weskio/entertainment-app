import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { RegularCardComponent } from '../../components/regular-card/regular-card.component';
import { EntertainmentDataService } from '../../services/entertainment-data.service';
import { EntertainmentCard } from '../../interfaces/entertainment-card';
import { SearchService } from '../../services/search.service';
import { LoadingComponent } from "../../components/loading/loading.component";

@Component({
    selector: 'app-bookmarked',
    standalone: true,
    templateUrl: './bookmarked.component.html',
    styleUrl: './bookmarked.component.css',
    imports: [SidebarComponent, SearchBarComponent, RegularCardComponent, LoadingComponent]
})
export class BookmarkedComponent {
  constructor(
    private bookmarkServices: EntertainmentDataService,
    private searchService: SearchService
  ) {}

  bookmarkedMovies: EntertainmentCard[] =
    this.bookmarkServices.getBookmarkedMovies();

  bookmarkedSeries: EntertainmentCard[] =
    this.bookmarkServices.getBookmarkedSeries();

  filteredShows: EntertainmentCard[] = [];

  searchInput: string = '';

  ngOnInit() {
    this.searchService.searchKeySubject.subscribe((data) => {
      this.searchInput = data;
      this.filteredShows = this.bookmarkServices.getFilteredShows(
        this.searchInput,
        ['Movie', 'TV Series'],
        [true]
      );
    });
  }
}
